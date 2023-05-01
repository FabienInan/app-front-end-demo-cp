import React from 'react';

import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';
import CustomThemeProvider from './themes/CustomThemeProvider';

import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'react-placeholder/lib/reactPlaceholder.css';

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <SnackbarProvider maxSnack={3} preventDuplicate={true} dense={true} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      >
        <App />
      </SnackbarProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
