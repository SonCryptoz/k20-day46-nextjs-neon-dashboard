import { Suspense } from "react";
import { fetchCustomers } from "@/app/data";

async function CustomersList() {
    const customers = await fetchCustomers();

    return (
        <ul className="divide-y divide-slate-100">
            {customers.map((customer, index) => (
                <li key={index} className="py-3 text-base font-medium text-slate-800">
                    {customer.name}
                </li>
            ))}
        </ul>
    );
}

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Customers</h1>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Suspense
                    fallback={
                        <p className="text-sm text-slate-500">Đang tải danh sách khách hàng...</p>
                    }
                >
                    <CustomersList />
                </Suspense>
            </div>
        </div>
    );
}
