module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'secondary': '#1A2B4A',
        'button-blue': '#1E3A5F',
        'background': '#FFFBF9',
        'white' : '#ffffff'
      },
      margin: {
        '25': '100px',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xl': '20px',
      },
      spacing: {
        '18': '18px',
        '38': '38px',
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}