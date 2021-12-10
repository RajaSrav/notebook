import React, { Component } from 'react'
import Intruduction from './gitcontentfiles/Intruduction';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GithubVCS from './gitcontentfiles/GithubVCS';
import GitInstallation from './gitcontentfiles/GitInstallation';
import GitTopics from './GitTopics';

export default class GitContent extends Component {
    render() {
        return (
            <div className="mainside">
                     
                <Router>
                <GitTopics />
                <div className="rightside">
                    
                    
                    <Route path="/github/"/>
                    <Route path="/github/githubintruduction" component={Intruduction} />
                    <Route path='/github/githubuses' component={GithubVCS} />
                    <Route path='/github/gitinstallation' component={GitInstallation} />
                    </div>
                
                </Router>
                
                  
            </div>
        )
    }
}
