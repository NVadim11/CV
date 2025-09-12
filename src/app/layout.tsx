import "./globals.css";
import { Metadata, Viewport } from "next";
import { titilliumWeb } from "./fonts";

export const metadata: Metadata = {
  title: "Vadim Palagin - Frontend Developer",
  description: "Frontend Developer with 4+ years of experience in web development. Specializing in React/Next.js, TypeScript, 3D graphics, and modern development technologies.",
  keywords: [
    "Frontend Developer", "React", "Next.js", "TypeScript", "JavaScript", 
    "Three.js", "GSAP", "Tailwind CSS", "Node.js", "PostgreSQL", 
    "Docker", "AWS", "Web3", "3D Graphics", "Animation"
  ],
  authors: [{ name: "Vadim Palagin" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Vadim Palagin - Frontend Developer",
    description: "Frontend Developer with 4+ years of experience in React/Next.js, TypeScript, 3D graphics, and modern web technologies",
    type: "website",
    url: "https://nvadim11.github.io/CV/",
    siteName: "Vadim Palagin CV",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadim Palagin - Frontend Developer",
    description: "Frontend Developer with 4+ years of experience in React/Next.js, TypeScript, 3D graphics, and modern web technologies",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`${titilliumWeb.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
