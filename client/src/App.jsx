import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { AddBookPage } from './AddBookPage';
import Container from './Container';

export function App() {
    return (
        <div>
            <Router history={history}>
                    <Container>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/addBook" component={AddBookPage} />
                    </Container>
            </Router>
        </div>
    );
}
