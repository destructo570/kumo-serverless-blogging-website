import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import "./globals.css";
import "./prosemirror.css";
import "react-loading-skeleton/dist/skeleton.css";
import NavBar from "@/components/common/Navigation/NavBar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kumo",
  description: "Serverless blog website with notion like editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-full max-w-[1400px]">
              <NavBar />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
