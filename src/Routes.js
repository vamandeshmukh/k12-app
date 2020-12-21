import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import DataMapper from './reduxStore/DataMapper';
import PageNotFound from './PageNotFound';
import Contact from './Contact';
const Routes = () => {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link> {' '}
                <Link to="/Contact">Contact</Link> {' '}
                <Link to="/DataMapper">DataMapper</Link> {' '}
                <Link to="/About">About</Link> {' '}
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/Contact"><Contact /></Route>
                    <Route exact path="/DataMapper"><DataMapper /></Route>
                    <Route exact path="/About"><About /></Route>
                    <Route path="/*"><PageNotFound /></Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Routes;

