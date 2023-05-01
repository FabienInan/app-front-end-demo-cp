import { frFR as coreFrFR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { frFR as datagridFrFR} from '@mui/x-data-grid';

import { commonPalette } from './commonPalette';
import { commonTypo } from './commonPalette';


const { commonPrimary, commonSecondary, calendar, success, warning, white, black, gray, text } = commonPalette;
export const participantTheme = createTheme({
  typography:
    commonTypo,
  palette: {
    mode: 'light',
    primary: {
      main: '#00e4a0',
      light: '#99FFE0',
      dark: '#00bc84',
      contrastText: '#1B1B1B',
      accent: '#3EFCC3',
      extralight: '#C2FFED',
      ultralight: '#D9FFF3'
    },
    secondary: {
      main: '#4B59C4',
      light:'#8E9AF2',
      dark: '#323B83',
      contrastText: '#FFFFFF',
      accent: '#5F70EE',
      ultralight:'#D4D9FF',
      extralight:'#B0B9FF',
    },
    commonPrimary,
    commonSecondary,
    calendar,
    success,
    warning,
    white,
    black,
    gray,
    text,
  },
},
datagridFrFR,
coreFrFR
);
