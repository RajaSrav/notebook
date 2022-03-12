import React, { Component } from 'react';
import HtmlIntruduction from './htmlcontentfiles/HtmlIntruduction';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HtmlTopics from './HtmlTopics';
import HtmlInstallation from './htmlcontentfiles/HtmlInstallation';
import HtmlStructure from './htmlcontentfiles/HtmlStructure';
import HtmlTypesElements from './htmlcontentfiles/HtmlTypesElements';
import HeadingTags from './htmlcontentfiles/tags/HeadingTags';
import ListTags from './htmlcontentfiles/tags/ListTags';

export default class HtmlContent extends Component {
    render() {
        return (
            <div className="mainside">
                     
            <Router>
            <HtmlTopics />
            <div className="rightside">
                        
                <Route path="/html"/>
                <Route path="/html/introduction" component={HtmlIntruduction}/>
                
                <Route path='/html/installation' component={HtmlInstallation} />
                <Route path='/html/structure' component={HtmlStructure} />
                <Route path='/html/typesofelements' component={HtmlTypesElements} />
                <Route path='/html/headingtags' component={HeadingTags} />
                <Route path='/html/liststags' component={ListTags} />
                </div>
            
            </Router>
            
              
        </div>
        )
    }
}
