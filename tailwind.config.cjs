/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the content path as needed
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Add the Rubik font family
      },
      fontSize: {
        base: "18px", // Set the base font size for body copy
      },
      screens: {
        sm: "375px", // Set the mobile breakpoint
        lg: "1120px",
        xl: "1440px", // Set the desktop breakpoint
      },
    },
  },
  plugins: [],
};
