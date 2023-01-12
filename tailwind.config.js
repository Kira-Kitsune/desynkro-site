/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                desynkro: '0px 1px 25px 5px #000000AD',
            },
            colors: {
                nav: '#00202B',
            },
            aspectRatio: {
                photo: '4 / 6',
            },
            backgroundImage: {
                title: 'url("./assets/images/title_bg.png")',
            },
        },
    },
    plugins: [],
};
