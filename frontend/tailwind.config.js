/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // adjust paths to your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        'primary-hover': '#2980b9',
        'dark-header': '#2c3e50',
        'dark-lighter': '#34495e',
        'dark-light': '#3d566e',
        'dark-gallery': '#1c1c1c',
        'light': '#f0f0f0',
        'light-muted': '#a0a0a0',
        'light-subtle': '#c0c0c0',
        'border': '#555555',
        'feature-title': '#1abc9c',
        'hero-title': '2.5rem', // if using as font size
        'hero-subtitle': '1.25rem',
        'price': '#e67e22',
        'section-title': '#16a085',
        'card': '#2f4f4f',
        // add other custom colors and values you use in your CSS
      },
      fontSize: {
        'hero-title': ['2.5rem', '3rem'],
        'hero-subtitle': ['1.25rem', '1.75rem'],
        'section-title': ['2rem', '2.5rem'],
        'menu-title': ['1.25rem', '1.5rem'],
        'price': ['1rem', '1.25rem'],
      },
      boxShadow: {
        header: '0 2px 5px rgba(0,0,0,0.1)',
        card: '0 4px 6px rgba(0,0,0,0.1)',
        feature: '0 8px 15px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        card: '0.5rem',
        feature: '1rem',
      },
      spacing: {
        section: '4rem',
        hero: '600px',
        container: '1200px',
      },
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill,minmax(300px,1fr))',
        'auto-fill-250': 'repeat(auto-fill,minmax(250px,1fr))',
      },
    },
  },
  plugins: [],
}
