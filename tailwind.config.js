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
      typography: {
        default: {
          css: {
            code: {
              color: '#ff9d7d',
              fontWeight: 'normal',
              '&:before': {
                display: 'none',
              },
              '&:after': {
                display: 'none',
              }
            },
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
      extend: {
        colors: {
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
      },
    },
    variants: {},
    plugins: [
      require('postcss-import'),
      require('@tailwindcss/typography'),
      require('autoprefixer')
    ],
  };
