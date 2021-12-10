import React, { Component } from 'react';
import HtmlIntruduction from './htmlcontentfiles/HtmlIntruduction';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HtmlTopics from './HtmlTopics';
import HtmlInstallation from './htmlcontentfiles/HtmlInstallation';

export default class HtmlContent extends Component {
    render() {
        return (
            <div className="mainside">
                     
            <Router>
            <HtmlTopics />
            <div className="rightside">
                        
                <Route path="/html"/>
                <Route path="/html/intruduction" component={HtmlIntruduction} />
                {/* <Route path='/github/githubuses' component={GithubVCS} /> */}
                <Route path='/html/installation' component={HtmlInstallation} />
                </div>
            
            </Router>
            
              
        </div>
        )
    }
}
