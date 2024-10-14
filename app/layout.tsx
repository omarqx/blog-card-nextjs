import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GreatFrontEnd Next.js Blog Card Project",
  description: "A responsive and accessible blog card component built with Next.js 14, featuring design fidelity, optimized performance, and cross-browser compatibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.className} antialiased bg-gradient`}
      >
        {children}
      </body>
    </html>
  );
}
