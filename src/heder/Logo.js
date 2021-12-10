import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from '../resources/github/Main';
import HtmlMain from '../resources/html/HtmlMain';
import ReactMain from '../resources/react/ReactMain';
import Navigation from './nav';
import './header.css';
export default class Logo extends Component {
    render() {
        return (
            <div>
            <div className="logosearch">
                <div className="logoname">
                    <h3>RajaS Note Book</h3>

                </div>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>

                </div>
                
            </div>
            <Router>
                <Navigation/>
                <Route path="/" />
                <Route path="/github" component={Main} />
                <Route path="/html" component={HtmlMain} />
                <Route path='/reactjs' component={ReactMain} />
                {/* <Route path="/profile" name="raja" component={Profile} /> */}
                
            </Router>
              
            </div>
        )
    }
}
