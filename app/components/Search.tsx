"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentSearch = searchParams.get("search") ?? "";

    function handleSearch(term: string) {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", "1");

            const trimmed = term.trim();
            if (trimmed) {
                params.set("search", trimmed);
            } else {
                params.delete("search");
            }

            replace(`${pathname}?${params.toString()}`);
        }, 300);
    }

    return (
        <div className="relative flex flex-1">
            <input
                key={currentSearch}
                type="search"
                placeholder={placeholder}
                defaultValue={currentSearch}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
}
