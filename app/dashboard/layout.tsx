import Link from "next/link";
import NavLinks from "@/app/components/NavLinks";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <aside className="w-full border-b border-slate-200 bg-white p-4 md:w-64 md:border-r md:border-b-0">
                <Link
                    href="/"
                    className="mb-6 flex justify-around items-center rounded-lg bg-slate-900 px-4 py-3 text-lg font-bold text-white"
                >
                    <svg
                        width="75"
                        height="24"
                        viewBox="0 0 95 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.7641 0.00671857V24L14.4915 15.9553V24H0V0L23.7641 0.00671857ZM2.913 21.087H11.5785V9.56326L20.8513 17.7671V2.91886L2.913 2.91371V21.087Z"
                            fill="#34D59A"
                        ></path>
                        <path
                            d="M94.6661 20.4063L83.9904 10.9579V20.221H80.6325V3.59375L91.3082 13.0421V8.41057V3.77901H94.6661V20.4063Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M69.9403 20.4063C65.2856 20.4063 61.534 16.6547 61.534 12C61.534 7.34531 65.2856 3.59375 69.9403 3.59375C74.595 3.59375 78.3466 7.34531 78.3466 12C78.3466 16.6547 74.595 20.4063 69.9403 20.4063ZM69.9403 17.1642C72.8119 17.1642 74.9655 14.8484 74.9655 12C74.9655 9.15162 72.8119 6.83584 69.9403 6.83584C67.0687 6.83584 64.9151 9.15162 64.9151 12C64.9151 14.8484 67.0687 17.1642 69.9403 17.1642Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M49.4943 20.221V3.77901H59.5448V7.09058H52.8522V10.3327H58.1553V13.5748H52.8522V16.9095H59.5448V20.221H49.4943Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M45.7978 20.4063L35.122 10.9579V20.221H31.7642V3.59375L42.4399 13.0421V3.77901H45.7978V20.4063Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span>Dashboard</span>
                </Link>
                <NavLinks />
            </aside>
            <main className="flex-1 p-6 md:p-10">{children}</main>
        </div>
    );
}
