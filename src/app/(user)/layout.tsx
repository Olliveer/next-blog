import { ReactNode } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import "../../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
