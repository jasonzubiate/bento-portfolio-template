import { Inter } from "next/font/google";
import "./globals.css";
import CursorDot from "@/components/website/CursorDot";
import LenisContext from "@/context/lenis-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className}`}>
        <LenisContext>
          <CursorDot />
          {children}
        </LenisContext>
      </body>
    </html>
  );
}
