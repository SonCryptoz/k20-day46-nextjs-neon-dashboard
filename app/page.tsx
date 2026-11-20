import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row">
            <div className="flex-1 space-y-5">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Hệ thống Quản lý Hóa đơn &amp; Khách hàng
                </h1>
                <p className="text-base leading-relaxed text-slate-600">
                    Ứng dụng Dashboard xây dựng bằng Next.js App Router, kết nối trực tiếp tới cơ sở
                    dữ liệu Neon Postgres hỗ trợ tìm kiếm và phân trang theo URL.
                </p>
                <Link
                    href="/dashboard"
                    className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                    Đi tới Dashboard
                </Link>
            </div>

            <div className="flex-1">
                <Image
                    src="/slide-2.png"
                    alt="Minh họa giao diện Dashboard"
                    width={600}
                    height={400}
                    priority
                    className="rounded-xl border border-slate-200 shadow-md"
                />
            </div>
        </main>
    );
}
