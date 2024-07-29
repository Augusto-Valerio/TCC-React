/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'body' : '#121214',
      'navbar-footer' : '#1A1A1E',
      'texto' : '#DCDCE1',
      'titulo' : '#E6E1E1',
      'titulo2' : '#505058',
      'rounded' : '#28272C',
      'navSelect' : '#8257E6'
    },
    fontFamily: {
      'inter': '"Inter"',
      'poppins': '"Poppins"',
      
      
    }

  },
  plugins: [],
}

