import React from 'react'
import HeadingTagsOutput from '../../images/headingtagsOutput.png'
import HeadingTagsInput from '../../images/headingtagsinput.png'

function HeadingTags() {
  return (
    <div className="installation introduction">
        <h3>Heading Tags</h3>
        <h5>Heading Tags</h5>
        <p>&#10148;Headings are a way to make text stand out by breaking up the page.</p>
        <p>&#10148;There are six different HTML headings which are defined with the &#60;h1&#62; to &#60;h6&#62; tags, from highest heading h1 to the least heading h6.</p>
        <h6>See below Example</h6>

        <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                     <p className='c'>&#60;h1&#62; Heading 1 &#60;/h1&#62;</p>
                     <p className='c'>&#60;h2&#62; Heading 2 &#60;/h2&#62;</p>
                     <p className='c'>&#60;h3&#62; Heading 3 &#60;/h3&#62;</p>
                     <p className='c'>&#60;h4&#62; Heading 4 &#60;/h4&#62;</p>
                     <p className='c'>&#60;h5&#62; Heading 5 &#60;/h5&#62;</p>
                     <p className='c'>&#60;h6&#62; Heading 6 &#60;/h6&#62;</p>
                     <span className='body'>&#60;/body&#62;</span><br />
                    
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See below output</h6>
            <img src={HeadingTagsOutput} alt="Heading tag Output"/>
            <img src={HeadingTagsInput} alt="Heading Tags Input"/>
    </div>
  )
}

export default HeadingTags