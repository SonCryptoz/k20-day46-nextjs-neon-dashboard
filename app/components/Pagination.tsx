"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    if (totalPages <= 1) return null;

    function createPageURL(pageNumber: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(pageNumber));
        return `${pathname}?${params.toString()}`;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-6 flex items-center justify-center gap-2">
            {currentPage > 1 && (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm hover:bg-slate-100"
                >
                    Trước
                </Link>
            )}

            {pages.map((page) => {
                const isCurrent = page === currentPage;
                return (
                    <Link
                        key={page}
                        href={createPageURL(page)}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition ${
                            isCurrent
                                ? "bg-blue-600 text-white"
                                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                    >
                        {page}
                    </Link>
                );
            })}

            {currentPage < totalPages && (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm hover:bg-slate-100"
                >
                    Sau
                </Link>
            )}
        </div>
    );
}
