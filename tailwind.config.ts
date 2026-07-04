import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B4D3E",
          primaryHover: "#163F33",
          primaryPressed: "#11332A",
          secondary: "#E8F1EE",
          accent: "#D9A441",
          whatsapp: "#25D366"
        },
        semantic: {
          success: "#1E7F4F",
          warning: "#B7791F",
          error: "#C0392B",
          info: "#2C6E9B"
        },
        lexuzNeutral: {
          canvas: "#F7F9F8",
          surface: "#FFFFFF",
          line: "#E3E8E5",
          30: "#A9B5AF",
          60: "#5C6B64",
          80: "#33403A",
          100: "#14201B"
        },
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
      borderRadius: {
        dsSm: "6px",
        dsMd: "10px",
        dsLg: "16px"
      },
      boxShadow: {
        ds1: "0 1px 2px rgba(20,32,27,.06)",
        ds2: "0 4px 12px rgba(20,32,27,.08)",
        ds3: "0 12px 32px rgba(20,32,27,.14)",
        premium: "0 22px 70px rgba(7,31,8,.16)",
        soft: "0 12px 35px rgba(7,31,8,.10)"
      }
    }
  },
  plugins: []
};

export default config;
