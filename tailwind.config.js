/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-poppins)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        main: "#d946ef",
        // Social media colors
        ig: "#E4405F",
        fb: "#1877F2",
        linkedin: "#0A66C2",
        twitter: "#1DA1F2",
        github: "#181717",
        gitlab: "#FC6D26",
        bitbucket: "#0052CC",
        // Dark mode optimized colors
        dark: {
          bg: {
            primary: "#0f172a",
            secondary: "#1e293b",
            tertiary: "#334155",
            card: "#1e293b",
          },
          text: {
            primary: "#f8fafc",
            secondary: "#e2e8f0",
            muted: "#94a3b8",
            accent: "#fbbf24",
          },
          border: {
            DEFAULT: "#334155",
            light: "#475569",
          },
        },
        // Light mode colors
        light: {
          bg: {
            primary: "#ffffff",
            secondary: "#f8fafc",
            tertiary: "#f1f5f9",
            card: "#ffffff",
          },
          text: {
            primary: "#0f172a",
            secondary: "#334155",
            muted: "#64748b",
            accent: "#d946ef",
          },
          border: {
            DEFAULT: "#e2e8f0",
            light: "#f1f5f9",
          },
        },
        // Accent colors
        accent: {
          primary: "#d946ef",
          secondary: "#fbbf24",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#3b82f6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-dark": "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        "gradient-accent": "linear-gradient(135deg, #d946ef 0%, #fbbf24 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(217, 70, 239, 0.3)",
        "glow-lg": "0 0 40px rgba(217, 70, 239, 0.4)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-dark":
          "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "card-hover-dark":
          "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(217, 70, 239, 0.5)" },
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
