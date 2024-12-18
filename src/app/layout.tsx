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
                <div className="fixed bottom-5 right-7 flex flex-col items-center justify-center gap-2 z-50">
                    <span className="text-center text-black/80 font-bold">
                        Nav
                    </span> 
                    <span className="w-5 h-1 bg-pri" />

                    <a className="text-center text-sec hover:scale-110" href="/dashboard">Dash</a>
                    <Link className="text-center text-sec hover:scale-110" href="/">Home</Link>
                </div>
            </body>
        </html>
    );
}
