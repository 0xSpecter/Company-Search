import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    title: "Double O",
    description: "When am i getting ze money$$",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className="bg-bg text-fg">
                <span className="fixed top-5 right-7 text-black/60">
                    DoubleO-AI UB  Bedrift filter demo v 0.0.1
                </span>
                {children}
                <div className="fixed bottom-0 right-1 flex flex-col items-center justify-center gap-2 z-50">
                    <Link className="text-center text-sec/40 hover:scale-110" href="/">Home</Link>
                </div>
            </body>
        </html>
    );
}
