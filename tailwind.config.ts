import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0B0B0C',
                    800: '#1A1A1A',
                },
                copper: {
                    500: '#CD7F32',
                    400: '#E5A05D',
                    300: '#F4C088',
                },
                gold: {
                    500: '#FFD700',
                    400: '#FFED4E',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(to bottom, #0B0B0C, #1A1A1A)',
            },
        },
    },
    plugins: [],
} satisfies Config;
