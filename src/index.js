import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'assets/theme/theme.js';
import AdminLayout from 'layouts/Admin.js';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path='/' render={(props) => <AdminLayout {...props} />} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector('#root')
);
