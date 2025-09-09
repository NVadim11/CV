import "./globals.css";
import { Metadata, Viewport } from "next";
import { titilliumWeb } from "./fonts";

export const metadata: Metadata = {
  title: "Vadim Palagin - Frontend Developer",
  description: "Frontend Developer with 4+ years of experience in web development. Specializing in React/Next.js, Web3 platforms, and modern development technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web3", "JavaScript"],
  authors: [{ name: "Vadim Palagin" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Vadim Palagin - Frontend Developer",
    description: "Frontend Developer with 4+ years of experience in web development",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable}`}>
        {children}
      </body>
    </html>
  );
}
