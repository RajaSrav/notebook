import React, { Component } from 'react'
import jsimg from '../jsimages/js.png'

export default class JsIntruduction extends Component {
    render() {
        return (
            <div>
                <div className='intruduction'>
                <h3>Java Script Introduction</h3>
                <div className="intmaindiv">
                <div className="intleftdiv">
                <h5>What is JavaScript?</h5>
                <ul type="square">
                    <li>JavaScript (js) is a light-weight object-oriented programming language.</li>
                    <li>It is a text-based programming language.</li>
                    <li>It is used both client-side and server-side that makes the web page interactive.</li>
                    <li>Javascript is a dynamic computer programming language.</li>
                    <li>It is Interpreted language and also case sensitive language.</li>
                    <li>Javascript'. Finally, in May 1995, Marc Andreessen</li>
                    <li>JavaScript was initially created to “make web pages alive”.</li>
                </ul>
                </div>

                <div className="intright">
                    <img src={jsimg} alt="gitimg" />
                </div>
            </div>
               
            
            
        </div>
            </div>
        )
    }
}
