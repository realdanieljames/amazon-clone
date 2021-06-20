module.exports = {
    mode: "jit",
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                amazon_blue: {
                    // light: "#232F3E",
                    light: "#f6003d",

                    // DEFAULT: "#131921",
                    DEFAULT: "#b3002d",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};