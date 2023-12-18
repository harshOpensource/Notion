import { ThemeProvider } from "@/components/provider/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where teams get work done.",

  // This following codes add icons in the tab both for light and dark mode
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.svg",
        href: "/images/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo-dark.svg",
        href: "/images/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
