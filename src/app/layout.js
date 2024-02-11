import { Inter } from "next/font/google";
import "./globals.css";
import UtilsProvider from "@/providers/UtilsProvider/UtilsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo-app",
  description: "Todo application by Mikail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UtilsProvider>
        <body className={inter.className}>{children}</body>
      </UtilsProvider>
    </html>
  );
}
