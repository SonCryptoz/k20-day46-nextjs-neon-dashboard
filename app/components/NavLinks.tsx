"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Invoices", href: "/dashboard/invoices" },
    { name: "Customers", href: "/dashboard/customers" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row gap-2 md:flex-col">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                            isActive
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-slate-700 hover:bg-slate-100"
                        }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}
