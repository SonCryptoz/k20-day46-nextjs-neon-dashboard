import { Suspense } from "react";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import { fetchFilteredInvoices, fetchTotalPages } from "@/app/data";

async function InvoicesContent({
    searchParams,
}: {
    searchParams?: Promise<{
        search?: string;
        page?: string;
    }>;
}) {
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search ?? "";
    const currentPage = Math.max(1, Number(resolvedParams?.page) || 1);

    const [invoices, totalPages] = await Promise.all([
        fetchFilteredInvoices(search, currentPage),
        fetchTotalPages(search),
    ]);

    return (
        <>
            <Search placeholder="Tìm kiếm theo tên khách hàng..." />

            {invoices.length === 0 ? (
                <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                    Không tìm thấy hóa đơn nào
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Tên khách hàng</th>
                                <th className="px-4 py-3">Số tiền</th>
                                <th className="px-4 py-3">Trạng thái</th>
                                <th className="px-4 py-3">Ngày</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-slate-50">
                                    <td className="px-4 py-3 font-medium">#{invoice.id}</td>
                                    <td className="px-4 py-3">{invoice.name}</td>
                                    <td className="px-4 py-3">
                                        {invoice.amount.toLocaleString("vi-VN")} đ
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                invoice.status === "paid"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-amber-100 text-amber-700"
                                            }`}
                                        >
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{invoice.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Pagination totalPages={totalPages} />
        </>
    );
}

export default function InvoicesPage({
    searchParams,
}: {
    searchParams?: Promise<{
        search?: string;
        page?: string;
    }>;
}) {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Invoices</h1>

            <Suspense
                fallback={<p className="text-sm text-slate-500">Đang tải danh sách hóa đơn...</p>}
            >
                <InvoicesContent searchParams={searchParams} />
            </Suspense>
        </div>
    );
}
