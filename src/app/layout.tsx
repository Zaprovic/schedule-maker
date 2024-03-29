import { CircularStd } from "@/font-loader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Schedule Maker",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={CircularStd.className}>{children}</body>
        </html>
    );
}
