module.exports = {
    theme:{
        extends: {
            fontFamily: {
                bitter: ['Bitter', 'serif',],
                ubuntu: ['Ubuntu', 'sans-serif',],
                sacramento: ['Sacramento', 'sans-serif',],
                oswald: ['Oswald', 'sans-serif'],
                roobert: ['Roobert', 'sans-serif'],
                portico: ['Portico', 'sans-serif'],
                baybayin: ['Baybayin', 'sans-serif'],
                gameboy: ['Gameboy', 'sans-serif'],
            },
        },
        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
    },

    darkMode: 'class',

    plugins: [
        require('flowbite/plugin'),
        require("daisyui"),
    ],

    content: [
        "./node_modules/flowbite/**/*.js",
        "node_modules/preline/dist/*.js",
    ],

    // Customizing using existing theme from daisy UI
    // <html data-theme="cupcake"></html>
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
}