import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import { ProductsProvider } from "./_context/cartContext";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--montserrat-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.variable}`}>
      <body>
        <ProductsProvider>{children}</ProductsProvider>
      </body>
    </html>
  );
}
