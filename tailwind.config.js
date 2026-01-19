/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#030303', // Deep, almost black
                surface: '#0F0F0F',    // Slightly lighter
                surfaceHighlight: '#1A1A1A',
                primary: '#FF4D00',    // Vibrant Orange (International Orange style)
                'brand-yellow': '#FFD60A', // Vibrant Yellow
                secondary: '#FFFFFF',
                'text-main': '#EDEDED',
                'text-muted': '#888888',
            },
            fontFamily: {
                sans: ['"Outfit"', 'sans-serif'], // Changing font to Outfit for a more modern tech feel
                display: ['"Oswald"', 'sans-serif'], // For big impact headers
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'orange-glow': 'conic-gradient(from 180deg at 50% 50%, #FF4D00 0deg, #FF8800 180deg, #FF4D00 360deg)',
                'yellow-glow': 'conic-gradient(from 180deg at 50% 50%, #FFD60A 0deg, #EAB308 180deg, #FFD60A 360deg)',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            }
        },
    },
    plugins: [],
}
