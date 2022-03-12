import React from 'react'
import HtmlStructureimg from '../images/htmlstructure.png'
function HtmlStructure() {
    return (
        <div className="installation introduction">

            <h3>HTML Structure or Basic Construction of an HTML Page </h3>
            <h4>HTML Structure</h4>
                         
             <ul>
                 <li>The HTML structure consists of different parts.</li>
                 
                 <ol>
                     <li>HTML version information &#60;!DOCTYPE html&#62;</li>
                     <li>html</li>
                     <li>head</li>
                     <li>body</li>
                                                               
                 </ol>
                 
            </ul>
            <dl>
                <dt>&#60;!DOCTYPE html&#62; :-</dt>
                <dd>We can declare the HTML version by using doctype.</dd>
                <dt>&#60;html&#62;</dt>
                <dd>This tag signals that from here on we are going to write in HTML code</dd>
                <dt>&#60;head&#62;</dt>
                <dd>&#9864;The head part content is not visible on the screen. It works on the background of the webpage/website</dd>
                <dd>&#9864;This is where all the metadata for the page goes — stuff mostly meant for search engines and other computer programs.</dd>
                <dd>&#9864;In the head of the web page contains a title, Meta tags, favicon, Styles & Some Scripts related to the document.</dd>
                <dt>&#60;body&#62;</dt>
                <dd>&#9864;This is where the content of the page goes.</dd>
                <dd>The body session can be devices into 3 major parts/sessions</dd>
                <ol type='A'>
                    <li>Block-level Elements</li>
                    <li>Inline</li>
                    <li>Semantic</li>
                </ol>   
            </dl>

            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                     <p className='c'>Enter your owen content......</p>
                     <span className='body'>&#60;/body&#62;</span><br />
                    
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            
            <img src={HtmlStructureimg} alt='Html structure'/>           
           
        </div>
    )
}

export default HtmlStructure
