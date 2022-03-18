module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx}",
        "./src/screens/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["IBM Plex Sans", "sans-serif"],
                mono: ["Fira Mono", "mono"],
            },
            borderWidth: {
                1: "1px",
            },
            colors: {
                "theme-black": "#13151b",
                "theme-blue": "#101528",
                "theme-red": "#1C0300",
                "theme-gray-100": "#9EA3B1",
                "theme-gray-200": "#1B1E27",
                "theme-gray-300": "#393F51",
                "theme-gray-400": "#353943",
                "theme-gray-900": "#232323",
                "theme-light-gray": "#7C7C7C",
                "theme-green": "#70D756",
                "theme-discord": "#5765EE",
            },
            borderRadius: {
                "input-border": "5px",
            },
            borderColor: {
                "border-gray": "#353943",
            },
        },
    },
    plugins: [],
};