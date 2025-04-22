import type { Metadata } from "next";
import "./globals.css";
import { Bricol } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "InsightPrep",
  description: "AI powered platform for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className="dark">
      <body className={`${Bricol.className} antialiased`}>{children}</body>
    </html>
  );
}
