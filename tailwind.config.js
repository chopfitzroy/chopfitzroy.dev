const { fontFamily } = require('tailwindcss/defaultTheme');

const { sans } = fontFamily;

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...sans],
            },
        },
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
};