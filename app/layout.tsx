import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Providers from "./providers";
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Jobify Dev",
  description: "Job application tracking system for job hunters. Jobify App create by nextjs",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps ) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
