import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';
import { AuthProvider } from '../contexts/AuthContext';
import { LanguageProvider } from '../contexts/LanguageContext';

const AppRoutes = () => {
    return (
        <AuthProvider>
            <LanguageProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/admin" component={Admin} />
                    </Switch>
                </Router>
            </LanguageProvider>
        </AuthProvider>
    );
};

export default AppRoutes;