import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                main_bg: '#ECEBF3',
                maroon: {
                    500: '#ECEBF3'
                }
            },
            screens: {
                '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
                'xl': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
                'lg': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
                'md': {'max': '767px'}, // => @media (max-width: 767px) { ... }
                'sm': {'max': '639px'}, // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [forms],
};
