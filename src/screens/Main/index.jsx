import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Layout } from 'antd';
import Nav from '../Nav';
import Team from '../Team';
import Analytics from '../Analytics';
import Ideas from '../Ideas';
import HowItWorks from '../HowItWorks';

const Main = () => {
    
    let match = useRouteMatch();
    
    return (
        <Router>
            <Layout>
                <Nav />
                <Layout.Content>
                    <Switch>
                        <Route path="/analytics">
                            <Analytics />
                        </Route>
                        <Route path="/team">
                            <Team />
                        </Route>
                        <Route path="/ideas">
                            <Ideas />
                        </Route>
                        <Route path="/working">
                            <HowItWorks />
                        </Route>
                    </Switch>
                </Layout.Content>
            </Layout>
        </Router>
    )
}

export default Main;