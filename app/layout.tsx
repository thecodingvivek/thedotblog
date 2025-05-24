import type { Metadata } from "next";
import { bricole  } from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "The Dot Blog",
  description: "Blog by Vivek Chitturi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricole.className}`}>
        {children}
      </body>
    </html>
  );
}
