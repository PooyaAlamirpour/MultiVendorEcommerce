import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Online Shop",
  description: "The online shop application that is made by using react and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}
