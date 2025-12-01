import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jeff Muthuri - Financial Advisor & Insurance Broker',
  description: 'Secure your future with personalized insurance solutions. Expert financial advisory for pensions, education plans, and life insurance in Kenya.',
  keywords: 'insurance broker, financial advisor, Kenya insurance, pension plans, life insurance',
  authors: [{ name: 'Jeff Muthuri' }],
  openGraph: {
    title: 'Jeff Muthuri - Financial Advisor',
    description: 'Your trusted partner in financial security',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
