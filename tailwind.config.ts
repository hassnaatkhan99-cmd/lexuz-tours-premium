import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f8ef",
          100: "#dfeeda",
          500: "#3f7d25",
          700: "#174711",
          800: "#0f340d",
          900: "#071f08",
          950: "#041505"
        },
        saffron: {
          100: "#fff5c2",
          300: "#ffd96a",
          400: "#ffc928",
          500: "#f2ad00"
        },
        ink: "#111512"
      },
      boxShadow: {
        premium: "0 22px 70px rgba(7,31,8,.16)",
        soft: "0 12px 35px rgba(7,31,8,.10)"
      }
    }
  },
  plugins: []
};

export default config;
