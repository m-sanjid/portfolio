import type React from "react";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewTransitions } from "next-view-transitions";
import BottomNav from "@/components/bottom-nav";
import { Toaster } from "sonner";
import { TopBlur } from "@/components/top-blur";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Muhammed Sanjid - Developer & Designer",
  description:
    "Personal portfolio and blog of Muhammed Sanjid, a full-stack developer and designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.variable} ${merriweather.variable}`}
      >
        <body className="min-h-screen bg-background text-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Skip to main content link for screen readers */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Skip to main content
            </a>

            <Toaster />
            <Navigation />
            <TopBlur count={6} />
            <main
              id="main-content"
              className="mx-auto max-w-2xl py-10"
              role="main"
            >
              {children}
            </main>
            <BottomNav />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
