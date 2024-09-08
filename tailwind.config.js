/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            "very-light-gray": "#fafafa",
            "grayish-blue": "#a3a5ae",
            "very-dark-blue": "#4c4e61",
            cyan: "#45d3d3",
            red: "#ea5353",
            orange: "#fcaf4a",
            blue: "#549ef2",
            white: "#ffffff",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
}
