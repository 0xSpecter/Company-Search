import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Double O",
    description: "When am i getting ze money$$",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className="bg-bg text-fg">
                {children}
            </body>
        </html>
    );
}
