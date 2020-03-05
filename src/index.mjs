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

export default vars => ({
  '#Magic': {
    backgroundColor: vars.colors.black,
    color: vars.colors.white,

    '&.light': {
      backgroundColor: vars.colors.white,
      color: vars.colors.black,
    },
  },

  a: {
    textDecoration: 'none',
    color: vars.colors.green[500],

    '.light &&': {
      color: vars.colors.blue[900],
    },

    '&:hover': {
      color: vars.colors.blue[300],
    },
  },

  button: {
    padding: '.3em',
    margin: '.3em',
    fontSize: '1.2em',
  },

  '.LightSwitch': {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '1.5em',
    width: '1.5em',
  },
})
