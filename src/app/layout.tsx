import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const hongkong = Outfit({
  variable: "--font-hongkong",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JT Partners | Architecture & Engineering",
  description:
    "JT Partners is an international multi-disciplinary consultant offering architecture, planning, engineering, project management, infrastructure and cost consultancy services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hongkong.variable} h-full antialiased`}>
      <body className={`${hongkong.className} min-h-full`}>{children}</body>
    </html>
  );
}
