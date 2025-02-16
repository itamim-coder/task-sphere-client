import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "@/components/ui/sonner";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Task Sphere",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body className={`${josefinSans.className} antialiased`}>
          {children}
        </body>
        <Toaster position="top-right" richColors />
      </html>
    </Providers>
  );
}
