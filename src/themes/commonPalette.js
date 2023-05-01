import { deepOrange, green, purple } from '@mui/material/colors';

const commonPalette = {
  white: '#fafafa',
  black: '#000',
  commonPrimary: {
    main: '#4B59C4',
    light:'#8E9AF2',
    dark: '#323B83',
    contrastText: '#FFFFFF',
    accent: '#5F70EE',
    ultralight:'#D4D9FF',
    extralight:'#B0B9FF',
  },
  commonSecondary: {
    main: '#00e4a0',
    light: '#99FFE0',
    dark: '#00bc84',
    contrastText: '#1B1B1B',
    accent: '#3EFCC3',
    extralight: '#C2FFED',
    ultralight: '#D9FFF3'
  },
  success: {
    main: '#8ACD5C',
    light: '#CBFFA8',
    ultralight: '#EAFFDB',
  },
  warning: {
    main: '#FF9800',
    light: '#FFC878',
    ultralight: '#FFEDD4',
  },
  error: {
    main: '#FF6646',
    light: '#FFAA98',
    ultralight: '#FFEFEC',
  },
  gray: {
    main: '#9D9DC6',
    dark: '#7C70A8',
    accent: '#C7BDE3',
    light:'#E1DBF0',
    ultralight:'#D5D5D5',
    extralight:'#EAEAEA',
  },
  text: {
    primary: '#000073',
    secondary: '#8F86B0', // LIGHT in sketch
    disabled: '#B6A7DF',
    // ADDED COLORS
    accent: '#7546D5'
  },
  calendar: {
    myEvent: deepOrange[300],
    meeting: purple.A100,
    other: green.A200,
  }
};

const commonTypo = {
  fontFamily: ['Roboto'].join(','),
  h1: {
    fontSize: 32,
    fontWeight: 700,
  },
  h2: {
    fontSize: 27,
    fontWeight: 700,
  },
  h3: {
    fontSize: 23,
    fontWeight: 700,
  },
  h4: {
    fontSize: 20,
    fontWeight: 500,
  },
  h5: {
    fontSize: 18,
    fontWeight: 500,
  },
  h6: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.3,
  },
  subtitle1: {
    fontSize: 15,
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 700,
  },
  button: {
    textTransform: 'none',
    fontSize: 17,
    fontWeight: 400,
  },
  caption: {
    fontSize: 13,
    fontWeight: 400,
  },
  overline: {
    fontSize: 17,
    fontWeight: 400,
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
};

export { commonPalette, commonTypo };
