import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import JsTopics from './JsTopics';
import JsIntruduction from './jscontentfiles/JsIntruduction';

export default class JsContents extends Component {
    render() {
        return (
            <div className="mainside">
                     
            <Router>
            <JsTopics />
            <div className="rightside">
                        
                <Route path="/html"/>
                <Route path="/javascript/intruduction" component={JsIntruduction} />
                {/* <Route path='/github/githubuses' component={GithubVCS} /> */}
                {/* <Route path='/html/installation' component={HtmlInstallation} /> */}
                </div>
            
            </Router>
            </div>
            
        )
    }
}
