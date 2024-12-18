import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#eee",
                fg: "#111",
                pri: "#DAB8FF",
                sec: "#280053",
                ter: "#7B34C8"
            },
        },
    },
    plugins: [],
} satisfies Config;
