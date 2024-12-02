/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/renderer/*.{ts,tsx,html}',
    './src/renderer/**/*.{ts,tsx,html}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-soft-peach': 'inset 0 0 0 1px #e6b6ac',
        'secondary-sky': '0 0 0 4px rgba(59, 130, 246, 1)'
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '60%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        shake: 'shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        'spin-slow': 'spin 1s linear infinite',
        'spin-medium': 'spin 0.5s linear infinite',
        'spin-fast': 'spin 0.25s linear infinite',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        'secondary-white': '#f6f7f8',
        'light-blue': '#0572ec',
        'dark-secondary-blue': '#1060d1',
        'dark-primary-blue': '#1a285f',
        'light-primary-blue': '#0166cb',
        'light-secondary-gray': '#707070',
        'light-pink': '#dfa4cf',
        'neutral-gray': '#cbcccd',
        'light-gray-blue': "#f6f7f",
        'soft-pink': '#fae5e1',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        'light-gray': 'rgb(118, 118, 118)',
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

