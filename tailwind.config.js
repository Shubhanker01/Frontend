module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-reduce'],
  },
}
