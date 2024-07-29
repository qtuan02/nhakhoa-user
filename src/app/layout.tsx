import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import { StoreProvider } from "@/redux/provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import AntdRegistry from "@/lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nha khoa OK-VIP",
    icons: {
        icon: "/logo.png"
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <AntdRegistry>
                    <StoreProvider>
                        <div>
                            <AppHeader />
                            <main className="mt-[64px]">
                                {children}
                            </main> 
                            <AppFooter />
                        </div>
                        <ToastContainer limit={3} autoClose={1200} />
                    </StoreProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
