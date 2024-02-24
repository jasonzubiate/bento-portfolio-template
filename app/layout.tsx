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
    <html lang="en">
      <body className={`${inter.className} bg-[#060606]`}>
        <LenisContext>
          <CursorDot />
          {children}
        </LenisContext>
      </body>
    </html>
  );
}
