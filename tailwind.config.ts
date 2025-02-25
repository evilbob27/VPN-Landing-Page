import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    50: "#DDE0E4",
                    100: "#EEEFF2",
                    200: "#DDDDDD",
                    700: "#4F5665",
                    900: "#OB132A",
                },
                orange: {
                    100: "#FFECEC",
                },
                red: {
                    600: "#F53838",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            lineHeight: {
                'normal': "30px",
                'spaced': "50px",
            },
        },
    },
    plugins: [],
} satisfies Config;
