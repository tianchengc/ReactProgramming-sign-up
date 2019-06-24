import createPalette from '@material-ui/core/styles/createPalette';

export const palette = createPalette({
  primary: {
    main: '#F23C50', // red
  },
  secondary: {
    main: '#4AD9D9', // blue
  },
  action: {
    active: '#FFCB05', // yellow
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF', // whitish
  },
  common: {
    black: '#4B5245', // light black
    white: '#FDFAF7', // whitish
  },
  error: {
    main: '#FFCB05',
  },
  text: {
    primary: '#4B5245', // light black
    secondary: '#000000',
    hint: '#000000',
  },
});
