import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class JsTopics extends Component {
    render() {
        return (
            <div className="leftside">
                <Link className="link1" to="/javascript/intruduction">&#10148; Java Script Intruduction</Link><br />
                
                <Link className="link1" to='/html/installation'>&#10148; JavaScript editors Installation</Link><br />
                <Link className="link1" to='/html'>&#10148; Console.Log</Link> <br /> 
                <Link className="link1" to='/html'>&#10148; Variables</Link><br />
                {/* <Link className="link1" to='/html'>&#10148; </Link><br /> */}
                {/* <Link className="link1" to='/html'>&#10148; Python</Link><br /> */}
                <Link className="link1" to='/html'>&#10148; Data Types</Link><br />
                <Link className="link1" to='/html'>&#10148; Type Conversions</Link><br />
                <Link className="link1" to="/html">&#10148; JavaScript Operators</Link><br />
                <Link className="link1" to='/html'>&#10148; Interaction: alert, prompt, confirm</Link> <br /> 
                <Link className="link1" to='/html'>&#10148; Selection Statement</Link><br />
                <Link className="link1" to='/html'>&#10148; Iterations or Loops</Link><br />
                <Link className="link1" to='/html'>&#10148; Functions</Link><br />
                <Link className="link1" to='/html'>&#10148; Arrays</Link><br />
                <Link className="link1" to='/html'>&#10148; Objects</Link><br />
                <Link className="link1" to='/html'>&#10148; Classes</Link><br />
                <Link className="link1" to="/html">&#10148; Error handling</Link><br />
                <Link className="link1" to='/html'>&#10148; Modules</Link> <br /> 
                <Link className="link1" to='/html'>&#10148; Generators and iteration</Link><br />
                {/* <Link className="link1" to='/html'>&#10148; React JS</Link><br />
                <Link className="link1" to='/html'>&#10148; Git & GitHub</Link><br />
                <Link className="link1" to='/html'>&#10148; Python</Link><br />
                <Link className="link1" to='/html'>&#10148; Google Tools</Link><br />
                <Link className="link1" to='/html'>&#10148; MIT Tool</Link><br /> */}
                </div>
        )
    }
}
