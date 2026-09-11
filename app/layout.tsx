import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default:"North Star Legislative Group", template:"%s | North Star Legislative Group" },
  description:"North Star Legislative Group advances evidence-based public policy through legislative research, drafting, advocacy, and civic engagement."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>
}
