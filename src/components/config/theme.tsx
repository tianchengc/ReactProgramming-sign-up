import { createMuiTheme } from '@material-ui/core';
import { palette } from './palette';
import { typography } from './typograhphy';

const spacingUnit = 4;

export const theme = createMuiTheme({
  spacing: spacingUnit,
  overrides: {
    MuiTableRow: {
      head: {
        height: 20,
      },
      root: {
        height: 32,
      },
      footer: {
        height: 32
      },
    },
    MuiTableCell: {
      root: {
        'borderColor': palette.primary.light,
        '&:last-child': {
          paddingRight: `${spacingUnit}px`,
        },
      },
      head: {
        fontWeight: 'bold',
        fontSize: 10,
        color: palette.text.primary,
        borderColor: palette.grey['500'],
        borderWidth: 1,
        padding: `${spacingUnit}px ${spacingUnit * 2}px`,
      },
      body: {
        ...typography.body1,
        padding: `${spacingUnit}px ${spacingUnit * 2}px`,
      },
    },
  },
  palette,
  typography,
});
