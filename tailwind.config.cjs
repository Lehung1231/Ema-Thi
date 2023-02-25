/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // Bật prefix nếu muốn dùng cả bootstrap và tailwind
    // prefix: "tw-",
    theme: {
        extend: {},
    },
    plugins: [],
};
