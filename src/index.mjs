export const vars = {
  background: {
    dark: '#232323',
    light: '#eeeeee',
  },

  text: {
    dark: '#cccccc',
    light: '#232323',
  },

  link: {
    dark: '#eeeeee',
    light: '#232323',

    hover: {
      dark: '#fefefe',
      light: '#232323',
    },
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '#Magic': {
      backgroundColor: v.colors.black,
      color: v.colors.white,

      '&.light': {
        backgroundColor: v.colors.white,
        color: v.colors.black,
      },
    },

    a: {
      textDecoration: 'none',
      color: v.colors.green[500],

      '.light &&': {
        color: v.colors.blue[900],
      },

      '&:hover': {
        color: v.colors.blue[300],
      },
    },

    button: {
      padding: '.3em',
      margin: '.3em',
      fontSize: '1.2em',
    },
  }
}
