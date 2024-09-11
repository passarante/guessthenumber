import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Sayı Bulmaca - Sayı tahmin oyunu",
  description: "Sayı tahmin oyunu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-sky-800 scrollbar-track-black overflow-y-auto"
    >
      <head />
      <body
        className={`${poppins.className} min-h-screen flex justify-between flex-col bg-gray-300 bg-[url('/assets/images/bg.jpg')] bg-cover `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-auto">
            <Navbar />
            <main className="flex flex-col flex-1 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-auto">
              {children}
            </main>
            <div className="fixed bottom-0 w-full">
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
