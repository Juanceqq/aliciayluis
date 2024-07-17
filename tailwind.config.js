const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '376px',
      ...defaultTheme.screens,
      '3xl': '2048px',
    },
    extend: {
      screens: {
        print: {raw: 'print'}
      },
      fontFamily: {
        'gistesy': ['Gistesy', 'sans-serif'],
        'mango': ['Black Mango', 'sans-serif'],
        'forum': ['Forum', 'sans-serif']
      },
      colors:{
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          DEFAULT: '#bfbfbf',
        },
        primary:{
          DEFAULT: '#fff9f2'
        },
        secondary: {
          DEFAULT: '#dba191'
        },
        tertiary: {
          DEFAULT: '#705953'
        },
        critical: {
          50: '#ffeaee',
          100: '#ffcbd0',
          200: '#f69696',
          300: '#ee6c6d',
          400: '#f84648',
          500: '#fd302a',
          600: '#ef222a',
          700: '#dd1224',
          800: '#d0011b',
          900: '#cd000d',
          DEFAULT: '#fd302a',
          inverse: '#ffffff',
        },
        caution: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#f59e0b',
          inverse: '#000000',
        },
        positive: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#22c55e',
          inverse: '#ffffff',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          DEFAULT: '#6b7280',
          inverse: '#ffffff',
        },
        info: {
          50: '#e4f1fa',
          100: '#bdddf4',
          200: '#95c8ee',
          300: '#6fb2e6',
          400: '#54a2e2',
          500: '#3f93dd',
          600: '#3885d0',
          700: '#3074bd',
          800: '#2963ab',
          900: '#1e468c',
          DEFAULT: '#3f93dd',
          inverse: '#ffffff',
        },
        promote: {
          50: '#efe6f4',
          100: '#d8c1e6',
          200: '#c098d6',
          300: '#a772c4',
          400: '#9556b7',
          500: '#843faa',
          600: '#773ba3',
          700: '#653599',
          800: '#55308f',
          900: '#37267f',
          DEFAULT: '#843faa',
          inverse: '#ffffff',
        },
      }
    },
  },
  plugins: [],
}
