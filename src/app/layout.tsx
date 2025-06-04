import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Việt Long May Mặc - Xưởng May Gia Công Thiết Kế Thời Trang",
  description:
    "Việt Long May Mặc chuyên gia công thiết kế và may mặc thời trang. Hỗ trợ shop thời trang, local brand từ thiết kế đến sản xuất.",
  keywords:
    "Xưởng may, gia công may mặc, thiết kế thời trang, may đo, sản xuất quần áo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <ClientBody>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
