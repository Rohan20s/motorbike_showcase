/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      palanquin: ['Palanquin', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'primary': "#ECEEFF",
      'ellipse-grey':"rgba(58,58,58,56%)",
      'red':'rgb(92, 82, 223)',
      "coral-red": "#FF6452",
      "slate-black": "#1D1D1F",
      "pale-blue": "#F5F6FF",
      "white-400": "rgba(255, 255, 255, 0.80)",
      "white": "rgba(255, 255, 255, 100%)",
    },
    extend: {
      
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/mesh.png')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}
