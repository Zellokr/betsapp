module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            borderCollapse: ['hover', 'focus', 'active'],
            outline: ['hover', 'focus', 'active'],
            textColor: ['hover', 'focus', 'active'],
            transitionProperty: {
                height: 'height'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
