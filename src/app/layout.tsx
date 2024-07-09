import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import { ReduxProvider } from "@/redux/provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
        <StyledComponentsRegistry>
          <ReduxProvider>
            <div>
              <AppHeader />
              <main className="mt-[64px]">
                {children}
              </main>
              <AppFooter />
            </div>
            <ToastContainer limit={3} autoClose={1200} />
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
