
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Menu from "@/component/Menu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "盧筱棠的個人履歷",
  description: "盧筱棠的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full m-0 p-0">
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-slate-700">

          {/* 左邊 / 上方 - Menu */}
          <div className="hidden md:block">
            <Menu />
          </div>

          {/* 右邊 / 下方 - Content */}
          <div className="w-full flex-1 md:ml-[320px] overflow-visible">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}

