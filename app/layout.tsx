import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: "HGM Software",
  description: "HGM Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon-64x64.jpg"
            type="image/png"
            sizes="any"
          />
          <link
            rel="shortcut icon"
            href="/icon-64x64.jpg"
            type="image/png"
            sizes="any"
          />
          <link
            rel="apple-touch-icon"
            href="/icon-64x64.jpg"
            type="image/png"
            sizes="180x180"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </head>
        <body className={`min-h-screen antialiased`}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
