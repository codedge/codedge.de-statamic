const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
        extend: {
            colors: {
                "pastel": "#f9faf4",
                primary: {
                    200: "#ff9d7d",
                    400: "#ff6633",
                },
                secondary: {
                    400: "#01262e"
                }
            },
            fontFamily: {
                sans: ["Rubik", ...defaultTheme.fontFamily.sans]
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: '#4a5568',
                            'text-decoration': 'none',
                            '&:hover': {
                                color: '#4a5568',
                            },
                        },
                    },
                },
            },
        },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
