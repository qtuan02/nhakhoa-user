import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import CLayout from "@/custom_antd/CLayout";

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
          <CLayout>
            <AppHeader />
            <main className="mt-[64px]">
              {children}
            </main>
            <AppFooter />
          </CLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
