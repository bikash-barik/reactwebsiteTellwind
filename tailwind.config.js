module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brown-man': '#34312D',
        'gray-man':'#7E7F83',
        'cream-man':'#E3DFFF',
        'emraid':'#61CE70',
        'black-smky':'#14110F',
        'jet':'#34312D',
        'gray-web':'#7E7F83',
        'lavender':'#E3DFFF',
        'frostbite':'#F13AB1',
        'positive':'#00a100',
      },
      keyframes: {
        forward: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(8px)' },
        },
       
      },
      animation: {
        'forward': 'forward 1s linear infinite',
      },
    },
    screens:{
      'tablet': '640px',
      'md':'768px',
      'sm':'380px',
      'lg':'1024px',
   },
  
 
  },
  plugins: [],
};
