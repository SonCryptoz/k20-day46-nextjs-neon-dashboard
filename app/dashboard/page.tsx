import { Suspense } from "react";
import { fetchLatestInvoices } from "@/app/data";

async function LatestInvoices() {
    const latestInvoices = await fetchLatestInvoices();

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 text-slate-500">
                    <tr>
                        <th className="py-2.5 pr-4">ID</th>
                        <th className="py-2.5 pr-4">Khách hàng</th>
                        <th className="py-2.5 pr-4">Số tiền</th>
                        <th className="py-2.5 pr-4">Trạng thái</th>
                        <th className="py-2.5">Ngày</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {latestInvoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td className="py-3 pr-4 font-medium">#{invoice.id}</td>
                            <td className="py-3 pr-4">{invoice.name}</td>
                            <td className="py-3 pr-4">
                                {invoice.amount.toLocaleString("vi-VN")} đ
                            </td>
                            <td className="py-3 pr-4">
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
                            <td className="py-3">{invoice.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">5 hóa đơn mới nhất</h2>
                <Suspense
                    fallback={
                        <p className="text-sm text-slate-500">Đang tải 5 hóa đơn mới nhất...</p>
                    }
                >
                    <LatestInvoices />
                </Suspense>
            </div>
        </div>
    );
}
