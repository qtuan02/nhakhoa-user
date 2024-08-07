import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
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
import dynamic from 'next/dynamic';
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
const AppHeader = dynamic(() => import('@/components/layout/AppHeader'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nha khoa OK-VIP",
    icons: {
        icon: "/logo.png"
    }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <AntdRegistry>
                    <StoreProvider>
                        <NextIntlClientProvider messages={messages}>
                            <div>
                                <AppHeader />
                                <main className="mt-[64px]">
                                    {children}
                                </main> 
                                <AppFooter />
                            </div>
                        </NextIntlClientProvider>
                        <ToastContainer limit={3} autoClose={1200} />
                    </StoreProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
