import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav';
import Team  from '../Team';
import Analytics from '../Analytics';
const Main = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/analytics">
                    <Analytics/>
                </Route>
                <Route path="/team">
                    <Team/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Main;