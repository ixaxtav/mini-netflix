import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Mini Netflix",
  description: "A mini version of Netflix",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
