import React, { Component } from 'react'

export default class HtmlIntruduction extends Component {
    render() {
        return (
            <div className='intruduction'>
                <h3>HTML Intruduction</h3>
                <div className="intmaindiv">
                <div className="intleftdiv">
                <h5>What is HTML?</h5>
                <ul type="square">
                    <li>HTML: stands for <b>HyperText Markup Language.</b></li>
                    <li>For creating the webpages or web applications statically.</li>
                    <li>A static website contains Web pages with fixed content. Each page is coded in HTML and displays the same information to every visitor.</li>
                    <li>By default, a web browser will display exactly what you type</li>
                    <li>HTML is the heart of web pages and HTML5 is the latest version to be approved by the World Wide Web Consortium (W3C)</li>
                    <li>HTML is not a programming language</li>
                    <li>We have to use HTML tags for formatting the data <span className='cmd'> &#60;element&#62; &#60;/element&#62;</span></li>
                </ul>
                </div>

                <div className="intright">
                    {/* <img src={logogit} alt="gitimg" /> */}
                </div>
            </div>
           
            
                <h5>Whta is Git Hub?</h5>
                <ul type="square">
                    <li>GitHub is platform for hosting service and access control and collaborating on git repositories.</li>
                    <li>It offers both distributed version control and source code management (SCM) functionality of Git.</li>                
                </ul>
                <h5>Git And GitHub Uses</h5>
                <div>
                    <p>&#9733; While doing Global certifications like Udacity,Coursera they will prefer Git & Github</p>
                    <p>&#9733; We can track history of files in the project</p>
                    <p>&#9733; While working on a project to collaborate with team members we can use Git and Github</p>
                    <p>&#9733; It is speed and efficiency.</p>
                </div>
            
            
        </div>
            
        )
    }
}
