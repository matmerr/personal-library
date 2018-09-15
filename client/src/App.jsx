import React from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { history } from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { AddBookPage } from './AddBookPage';
import Container from './Container';
import ApplicationTheme from './theme';

export default function App() {
  return (
    <MuiThemeProvider theme={ApplicationTheme}>
      <Router history={history}>
        <Container>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/addBook" component={AddBookPage} />
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}
