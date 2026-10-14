import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://northstarlegislative.org"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  title: { default:"North Star Legislative Group", template:"%s | North Star Legislative Group" },
  description:"North Star Legislative Group advances evidence-based public policy through legislative research, drafting, advocacy, and civic engagement."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>
}
