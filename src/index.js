import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Sejarah from './Sejarah';
import "./style.css";
import { Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const element = (
    <Router>
        <nav class="navbar navbar-default-pills">
            <Navbar.Brand><Link to="/Home">ADIWIYATA</Link></Navbar.Brand>
            <ul class="nav navbar-nav">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Sejarah">Sejarah</Link></li>
            </ul>
        </nav>

        <Switch>
            <Route path="/Sejarah">
                <Sejarah />
            </Route>
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
    
)
ReactDOM.render(element, document.getElementById("root"))