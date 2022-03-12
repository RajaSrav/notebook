import React from 'react';

function HtmlTypesElements() {
  return <div className="installation introduction">

  <h3> Type of Elements</h3>
  <h4> Type of Elements</h4>          
   <ul>
    <li>The body session can be devices into 3 major parts sessions</li>
       
       <ol type='A'>
            <a href="#block"><li>Block-level Elements</li></a>
            <a href="#inline"><li>Inline</li></a>
            <a href="#semantic"><li>Semantic</li></a>                                         
       </ol>
       
  </ul>
     <h5 id="block">Block-Level Elements</h5>
     <ul>
          <li>A Block-level element occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents</li>
          <li>A block-level element is an html element that being start with a new line in the web application</li>
          <li>Some Example tags</li>
          <ul>
               <li>All Heading tags <strong>(h1 to h6) </strong> &#60;h1&#62; ... &#60;/h1&#62;</li>
               <li>Paragraph tag &#60;p&#62; ... &#60;/p&#62;</li>
               <li>All Division Tags &#60;div&#62; ... &#60;/div&#62;</li>
               <li>Lists tags (ol, ul, dl,li and dt dd)</li>
               <li>Horizontal line tags ( hr )</li>
               <li>Table tags (table, tr, th, td)</li>
               <li>All Semantic Tags also Block-Level Elements</li>
          </ul>

     </ul>
     <h5 id='inline'>Inline Elements</h5>
     <ul>
          <li>The Elements which don't occupy the complete width of the screen (we are able to see the output side by side).</li>
          <li>Example Of Inline Tags</li>
               <ul>
                    <li>Span tag   <spam className="tags">&#60;span&#62; ... &#60;/span&#62; </spam></li>
                    <li>Image tag  <spam className="tags">&#60; img /&#62;</spam></li>
                    <li>Anchor Tag <spam className="tags">&#60;a&#62; ... &#60;/a&#62;</spam></li>
                    <li>Button tag <spam className="tags">&#60;button&#62; ... &#60;/button&#62;</spam></li>
                    <li>Input tags <spam className="tags">&#60;input&#62; ... &#60;/input&#62;</spam> etc..,</li>
               </ul>
     </ul>
     
     <h5 id="semantic">Semantic Elements</h5>
     <ul>
          <li>A semantic element clearly describes its meaning to both the browser and the developer.</li>
          <li>Semantic Elements are similar to div tags used to divide the content into sections. But div tags don't contain any Description .</li>
          <li>This is for increasing the accessibility of a website.</li>
          <li>Example Of Semantic Tags</li>
          <ul>
               <li>Header Tag  <spam className="tags"> &#60;header&#62; ... &#60;/header&#62;</spam></li>
               <li>Footer Tag  <spam className="tags">&#60;footer&#62; ... &#60;/footer&#62;</spam></li>
               <li>Section Tag <spam className="tags">&#60;section&#62; ... &#60;/section&#62;</spam></li>
               <li>Article Tag <spam className="tags">&#60;article&#62; ... &#60;/article&#62;</spam></li>
               <li>Aside Tag   <spam className="tags">&#60;aside&#62; ... &#60;/aside&#62;</spam></li>
               <li>Main Tag    <spam className="tags">&#60;main&#62; ... &#60;/main&#62;</spam></li>
               <li>Nav Tag     <spam className="tags">&#60;span&#62; ... &#60;/span&#62;</spam></li>
               <li>summery Tag <spam className="tags">&#60;summery&#62; ... &#60;/summery&#62;</spam> etc...,</li>
                 
          </ul>
     </ul>
 
</div>
}

export default HtmlTypesElements;
