import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coffee Can - Drink the Drama",
    description: "Not just coffee. A cinematic experience. Matte black aluminum, crafted for impact.",
    keywords: ["coffee", "premium coffee", "coffee can", "espresso"],
    icons: {
        icon: '/payment/favicon.png',
        shortcut: '/payment/favicon.png',
        apple: '/payment/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
