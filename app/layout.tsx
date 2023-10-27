import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RHF + Tailwind Practice",
  description: "React Hook Form + Tailwind Practice ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
