import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Home from '../Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/analytics">
                    <Main />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;