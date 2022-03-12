import React, { Component } from 'react'
import logoReact from '../images/logo512.png'
import futureRect from '../images/reactjs-features.png'

export default class ReactIntruduction extends Component {
    render() {
        return (
            <div className="c">
            <h3>React Js introduction</h3>
            
            <div className="intmaindiv">
                <div className="intleftdiv">
                <h5>What is React Js?</h5>
                <ul type="square">
                    <li>It is a single page application</li>
                    <li>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.</li>
                    <li>It is not a framework it is a js library and open source</li>
                    <li>It was created by <b>Jordan Walke</b>, who was a software engineer at Facebook.</li>
                    <li>Facebook developed ReactJS in 2011 in its news feed section, but it was released to the public in the month of May 2013.</li>
                    <li>Today, most of the websites are built using MVC (model view controller) architecture.</li>
                    <li>A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code.</li>
                    <li>ReactJS uses virtual DOM(Document Object Model)  based mechanism to fill data in HTML DOM.</li>
                    <li>The virtual DOM works fast as it only changes individual DOM elements instead of reloading the complete DOM every time.</li>
                </ul>
                </div>

                <div className="intright">
                    <img src={logoReact} alt="React Jsimg" />
                </div>
            </div>
           
                <h5>Uses and futures of React Js</h5>
                <div>
                    <p>&#9733; The main objective of ReactJS is to develop User Interfaces (UI) that improve the speed of the apps.</p>
                    <p>&#9733; It uses virtual DOM (JavaScript object), which improves the performance of the app. </p>
                    <p>&#9733; The JavaScript virtual DOM is faster than the regular DOM. </p>
                    <p>&#9733; We can use ReactJS on the client and server sides as well as with other frameworks. It uses components and data patterns that improve readability and help to maintain larger apps.</p>
                </div>
                 <h4>React Features</h4>
                 <div className='intmaindiv'>

                 <ul type="none" className='intleftdiv'>
                    <li>&#128299; JSX</li>
                    <li>&#128299; Components</li>
                    <li>&#128299; One-way Data Binding</li>
                    <li>&#128299; Virtual DOM</li>
                    <li>&#128299; Simplicity</li>
                    <li>&#128299; Performance</li>
                    
                 </ul>
                 <img className='rightside' src={futureRect} alt='React Futures' />
                 </div>

                
                 <h5>Prerequisites Technologies</h5>
                 <ul type="none">
                     <li>&#10148; HTML5</li>
                     <li>&#10148; CSS3, Bootstrap</li>
                     <li>&#10148; JavaScript, ES6</li>
                </ul>
            
        </div>
        )
    }
}
