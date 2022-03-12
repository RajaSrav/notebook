import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactTopics from './ReactTopics';
import ReactIntruduction from './reactcontentfiles/ReactIntruduction';
import ReactInstallation from './reactcontentfiles/ReactInstallation';
import ReactProjectCreation from './reactcontentfiles/ReactProjectCreation';
import ReactComponent from './reactcontentfiles/ReactComponent';
import Editors from '../html/htmlcontentfiles/HtmlInstallation'


export default class ReactContent extends Component {
    render() {
        return (
            <div className="mainside">
                <Router>
                <ReactTopics />
                <div className="rightside"> 
                    <Route path="/reactjs"/>
                    <Route path="/reactjs/introduction" component={ReactIntruduction} />
                    <Route path='/reactjs/installation' component={ReactInstallation} />
                    <Route path='/reactjs/editors' component={Editors} />
                    <Route path='/reactjs/projectcreation' component={ReactProjectCreation} />
                    <Route path='/reactjs/components' component={ReactComponent} />
                    </div>
                
                </Router>
            </div>
        )
    }
}
