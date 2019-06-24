import createTyprography from '@material-ui/core/styles/createTypography';
import { palette } from './palette';

export const typography = createTyprography(palette, {
  fontFamily: 'Helvetica',
  //useNextVariants: true,
  h1: {
    fontSize: 22,
    fontWeight: 600,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: 10,
  },
  body2: {
    fontSize: 8,
  },
  caption: {
    fontSize: 8,
  },
})