import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "Pamukkale Kağıt Üürünleri",
  description: "Pamukkale Kağıt Üürünleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
     <ReactQueryProvider>
      <html>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* <link
            rel="icon"
            href="/icon4.png"
            type="image/png"
            sizes="any"
          /> */}
          {/* <link
            rel="shortcut icon"
            href="/icon6.jpg"
            type="image/png"
            sizes="any"
          /> */}
          {/* <link
            rel="apple-touch-icon"
            href="/icon6.jpg"
            type="image/png"
            sizes="180x180"
          /> */}
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          </head>
          <body className={``}>
            <Navbar /> 
            {children}
            <Footer />
          </body>
        </html>
      </ReactQueryProvider>
    </StoreProvider>
  );
}
