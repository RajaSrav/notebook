import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactTopics from './ReactTopics';
import ReactIntruduction from './reactcontentfiles/ReactIntruduction';
import ReactInstallation from './reactcontentfiles/ReactInstallation';

export default class ReactContent extends Component {
    render() {
        return (
            <div className="mainside">
                <Router>
                <ReactTopics />
                <div className="rightside"> 
                    <Route path="/reactjs"/>
                    <Route path="/reactjs/intruduction" component={ReactIntruduction} />
                    <Route path='/reactjs/installation' component={ReactInstallation} />
                    </div>
                
                </Router>
            </div>
        )
    }
}
