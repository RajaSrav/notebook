import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HtmlTopics extends Component {
    render() {
        return (
            <div className="leftside">
                <Link className="link1" to="/html/introduction">&#10148; HTML Introduction</Link><br />
                
                <Link className="link1" to='/html/installation'>&#10148; HTML Editors and Editors Installation</Link><br />
                <Link className="link1" to='/html/structure'>&#10148; HTML Structure</Link> <br /> 
                <Link className="link1" to='/html/typesofelements'>&#10148; Types Of Elements</Link><br />
                <Link className="link1" to='/html/alltsgs'>&#10148; All HTML Tags</Link><br />
                <Link className="link1" to='/html/headingtags'>&#10148;HTML Heading Tags</Link><br />
                <Link className="link1" to="/html/linkstags">&#10148;HTML Links Tags</Link><br />
                <Link className="link1" to='/html/liststags'>&#10148;HTML List Tags</Link> <br /> 
                <Link className="link1" to='/html/tabletagslis'>&#10148;HTML Table Tags</Link><br />
                <Link className="link1" to='/html/inputstags'>&#10148;HTML Input Tags</Link><br />
                <Link className="link1" to='/html/inlineelements'>&#10148;HTML Inline Elements</Link><br />
                <Link className="link1" to='/html/textelaments'>&#10148; Python</Link><br />
               
        </div>
        )
    }
}
