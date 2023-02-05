import { ReactNode } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import "../../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
