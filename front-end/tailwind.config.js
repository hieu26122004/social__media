/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          header: "hsl(var(--foreground-header))",
        },
        popover: "hsl(var(--popover))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          600: "hsl(var(--primary-600))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          600: "hsl(var(--accent-600))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: "hsl(var(--muted))",
      },
      backgroundImage: {
        weather: "url('./src/assets/weather-bg.svg')",
        birthday: "url('./src/assets/birthday-bg.svg')",
      },
      fontFamily: {
        DEFAULT: "var(--ff-roboto)",
        montserrat: "var(--ff-montserrat)",
        roboto: "var(--ff-roboto)",
      },
      keyframes: {
        balloon1: {
          "0%": {
            transform: "scaleX(1.2) scaleY(0.7)",
          },
          "50%": { transform: "scaleX(0.9) scaleY(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        balloon2: {
          "0%": { transform: "scaleX(1.2) scaleY(0.7)" },
          "50%": { transform: "scaleX(0.9) scaleY(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        like: "balloon1 0.5s linear",
        unlike: "balloon2 0.6s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
