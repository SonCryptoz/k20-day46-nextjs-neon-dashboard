import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
    title: "Next.js Neon Dashboard",
    description: "Ứng dụng quản lý hóa đơn và khách hàng với Next.js & Neon Postgres",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
                {children}
            </body>
        </html>
    );
}
