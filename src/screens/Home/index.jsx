import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Main from '../Main'
const Home = () => {
    return (
            <Link to="/analytics">
                GO
            </Link>
    )
}

export default Home;