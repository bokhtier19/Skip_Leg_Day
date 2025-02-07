/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                GRed: "#ed1b24",
                GBlack: "#231e20",
            },
            clipPath: {
                parallogram: "polygon(0 0 , 100% 5% , 100% 95% , 0 100%)",
                classes: "polygon(0 30% , 100% 0 , 100% 100% , 0 100% )",
            },
        },
    },
    plugins: [require("tailwind-clip-path")],
};
