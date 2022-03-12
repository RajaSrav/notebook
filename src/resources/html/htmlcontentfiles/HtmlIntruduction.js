import React, { Component } from 'react'
import Htmlimg from '../images/htmlimg.png'
import BlockElement from '../images/html-building-blocks.png'

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
                    <li>Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether.</li>
                    <li>Markup Language is used to apply layout and formatting conventions to a text document.</li>
                    <li>HTML Present version of HTML5</li>
                    <li>HTML is a creating the webpages or web applications.</li>
                    <li>A static website contains Web pages with fixed content. Each page is coded in HTML and displays the same information to every visitor.</li>
                    <li>By default, a web browser will display exactly what you type</li>
                    <li>HTML is the heart of web pages and HTML5 is the latest version to be approved by the World Wide Web Consortium (W3C)</li>
                    <li>HTML is not a programming language</li>
                    <li>We have to use HTML tags for formatting the data <span className='cmd'> &#60;element&#62; &#60;/element&#62;</span></li>
                    <h6>Syntax</h6>
                    <ul type="none">
                        
                        <li> <span className='cmd'>&#60;Open_Tag_Name Attributes &#62; Content...  &#60;/Close_Tag_Name &#62;</span>
                        </li>
                        
                    </ul>

                </ul>
                </div>

                <div className="intright">
                    <img src={Htmlimg} alt="HTML" />
                </div>
            </div>
           
            
                <h5>What are HTML Tags?</h5>
                <ul type="square">
                    <li>Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets</li>
                    <li>Most tags must be opened <span className='cmd'>&#60;h1&#62;</span> and closed<span className='cmd'> &#60;/h1&#62;</span> in order to function.</li>                
                </ul>
                <h5>What are HTML Attributes?</h5>
                <ul type="Circle">
                    <li>
                        Attributes contain additional pieces of information.
                    </li>
                    <li>Attributes take the form of an opening tag and additional info is placed inside.</li>
                    <li>&#60;tag name  attribute_name= " attr_value"&#62; content..... &#60;/ tag name&#62;   </li>
                    
                    <li><span className='cmd'>&#60;h1 color="Blue"&#62; content.... &#60;/h1&#62;</span></li>
                </ul>
            <img src={BlockElement} alt='Html element' />
            
        </div>
            
        )
    }
}
