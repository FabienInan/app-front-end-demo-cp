import React, { useState } from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

import getTheme from './base';

export const CustomThemeContext = React.createContext(
  {
    currentTheme: 'participantTheme',
    setTheme: null,
  },
);

const CustomThemeProvider = ({children}) => {
  // Read current theme from localStorage or maybe from an api

  if (localStorage.getItem('appTheme') !== 'participantTheme' 
    || localStorage.getItem('appTheme') !== 'intervenerTheme' ) {
    localStorage.setItem('appTheme', 'participantTheme');
  }

  const currentTheme = localStorage.getItem('appTheme') || 'participantTheme';

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName);

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = ({
  children: PropTypes.element.isRequired,
});

export default CustomThemeProvider;
