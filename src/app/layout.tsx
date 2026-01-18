import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HypeProvider } from "@/context/HypeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry Bestritsky | AI Strategy & Implementation",
  description: "The Digital Trust Engine. Stop asking 'What AI Tool?' and start asking 'How much can I trust?'. Battle-tested AI strategy for executives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-photon-blue/30 selection:text-photon-blue`}
      >
        <div className="noise-overlay" />
        <HypeProvider>
          {children}
        </HypeProvider>
      </body>
    </html>
  );
}
