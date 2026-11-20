import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
const ITEMS_PER_PAGE = 5;

export interface InvoiceRow {
    id: number;
    customer_id: number;
    name: string;
    amount: number;
    status: "paid" | "pending";
    date: string;
}

export interface CustomerRow {
    name: string;
}

// 1. Lấy 5 hóa đơn mới nhất cho trang /dashboard
export async function fetchLatestInvoices(): Promise<InvoiceRow[]> {
    const data = await sql`
    SELECT
      invoices.id,
      invoices.customer_id,
      customers.name,
      invoices.amount,
      invoices.status,
      invoices.date::text AS date
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY invoices.date DESC, invoices.id DESC
    LIMIT 5;
  `;
    return data as InvoiceRow[];
}

// 2. Lấy danh sách tên khách hàng theo thứ tự ID cho /dashboard/customers
export async function fetchCustomers(): Promise<CustomerRow[]> {
    const data = await sql`
    SELECT name FROM customers ORDER BY id;
  `;
    return data as CustomerRow[];
}

// 3. Lấy hóa đơn có lọc theo search (ILIKE) và phân trang (5 hóa đơn/trang)
export async function fetchFilteredInvoices(
    search: string,
    currentPage: number,
): Promise<InvoiceRow[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const data = await sql`
    SELECT
      invoices.id,
      invoices.customer_id,
      customers.name,
      invoices.amount,
      invoices.status,
      invoices.date::text AS date
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE customers.name ILIKE ${`%${search}%`}
    ORDER BY invoices.date DESC, invoices.id DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
  `;

    return data as InvoiceRow[];
}

// 4. Tính tổng số trang dựa trên từ khóa search (theo đúng hàm mẫu trong đề)
export async function fetchTotalPages(search: string): Promise<number> {
    const limit = ITEMS_PER_PAGE;
    const data = await sql`
    SELECT COUNT(*) AS total
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE customers.name ILIKE ${`%${search}%`};
  `;
    const totalInvoices = Number(data[0].total);
    return Math.ceil(totalInvoices / limit);
}
