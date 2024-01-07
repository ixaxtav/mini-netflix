import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Netflix",
  description: "A mini version of Netflix",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
