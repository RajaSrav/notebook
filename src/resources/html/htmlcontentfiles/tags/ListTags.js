import React from 'react'
import OrderListOutput from '../../images/orderlistOut.png'
import OrderListCode from '../../images/orderlistoutput.png'
import TypeA from '../../images/typeA.png'
import TypeALow from '../../images/Typealow.png'
import StartAtrib  from '../../images/startattrib.png'
import Reversed from '../../images/reversedattrib.png'
import UnorderedList from '../../images/unorderedlist.png'
import UnorderedListSquare from '../../images/unorderedlistsquere.png'
import ExampleOrderUnordered from '../../images/exampleorderunordered.png'
import ExampleOrderUnorderedOutput from '../../images/exampleorderunorderedoutput.png'
import DescriptionList from '../../images/descriptionlist.png'
import DescriptionListOutput from '../../images/descriptionlistoutput.png'

function ListTags() {
  return (
    <div className='installation introduction'>
        <h3>HTML Lists</h3>
        <h5>HTML Lists</h5>
        <p> &#8594; Lists are used to specify lists of information.</p>
        <p> &#8594; List offers three ways for specifying lists of information.</p>
        <ol >
            <li><a href='#order'>Ordered List (ol)</a></li>
            <li><a href='#unordered'>Unordered List (ul)</a></li>
            <li><a href='#description'>Description List or Definition List (dl)</a></li>
        </ol>
        <h5 id='order'>Ordered List (ol)</h5>
        <p>&#8658; The HTML ol tag is used for ordered list.</p>
        <p>&#8658; We can use ordered list to represent items either in numerical order format or alphabetical order format or roman order formate.</p>
        <h6>See the below code order list Example</h6><br />
        <p>In the ordered HTML lists, all the list items are marked with numbers by default. The ordered list starts with &#60;ol&#62; tag and the list items start with &#60;li&#62; tag.</p>

        <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol&#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See this Output</h6>
            <img src={OrderListOutput} className='types' alt="Order List Output" />
            <h6>See this code</h6>
            <img src={OrderListCode} className='types' alt="Order List Output" />
            <h6>DIfferent Order List</h6>
            <ul>
              <li>To represent different ordered lists, there are 5 types of attributes in &#60;ol&#62; tag.</li>
              
            </ul>
            <table>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Type "1"</td>
                <td>This is the default type. In this type, the list items are numbered with numbers.</td>
              </tr>
              <tr>
                <td>Type "I"</td>
                <td>In this type, the list items are numbered with upper case roman numbers.</td>
              </tr>
              <tr>
                <td>Type "i"</td>
                <td>In this type, the list items are numbered with lower case roman numbers.</td>
              </tr>
              <tr>
                <td>Type "A"</td>
                <td>In this type, the list items are numbered with upper case letters.</td>
              </tr>
              <tr>
                <td>Type "a"</td>
                <td>In this type, the list items are numbered with lower case letters.</td>
              </tr>
            </table>
            <h6>ol type="A"</h6>
            <p>Let's see the example to display list in alphabet uppercase.</p>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="A" </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See this Output</h6>
            <img src={TypeA} className='types' alt="Order List Output" />
            <h6>ol type="a"</h6>
            <p>Let's see the example to display list in alphabet lowercase.</p>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="A" </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See this Output</h6>
            <img src={TypeALow} alt="Order List Output" className='types'/>
            <h6>ol type="I"</h6>
            <p>Let's see the example to display list in roman number uppercase.</p>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="I" </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            {/* <h6>See this Output</h6> */}
            {/* <img src={TypeALow} alt="Order List Output" className='types'/> */}
            <h6>ol type="i"</h6>
            <p>Let's see the example to display list in roman number uppercase.</p>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="i" </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h5>start attribute</h5>
            <p>The start attribute is used with ol tag to specify from where to start the list items.</p>
            <p>&#60;ol type="1" start="5"&#62; : It will show numeric values starting with "5".</p>
            <p>&#60;ol type="A" start="5"&#62; : It will show capital alphabets starting with "E".</p>
            <p>&#60;ol type="a" start="5"&#62; : It will show lower case alphabets starting with "e".</p>
            <p>&#60;ol type="I" start="5"&#62; : It will show Roman upper case value starting with "V".</p>
            <p>&#60;ol type="i" start="5"&#62; : It will show Roman lower case value starting with "v".</p>
            <h6>See below code start attribute</h6>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="A"  start="5"</span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See below output start attribute</h6>
             <img src={StartAtrib} alt="Order List Output" className='types'/>
            <h5>reversed Attribute:</h5>
            <p>This is a Boolean attribute of HTML <b> ol </b>tag, and it is new in HTML5 version. If you use the reversed attribute with</p> 
            <h6>See below reversed attribute code</h6>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ol <span className='type'> type="A"  reversed</span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; List One &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Two &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Three &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Four &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; List Five &#60;/li&#62;</p>
                        
                        <span>&#60;/ol&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See below output reversed attributed</h6>
            <img src={Reversed} alt="Order List Output" className='types'/>

            <h5 id='unordered'>Unordered List (ul)</h5>
            <p>&#8658; We can use unordered list where we do not need to display items in any particular order.</p>
            <p>&#8658; HTML Unordered List displays elements in bulleted format .</p>
            <p>&#8658; There can be 4 types of bulleted list:</p>
            <ol>
                <li>disc</li>
                <li>circle</li>
                <li>square</li>
                <li>none</li>
            </ol>
            <h6>See below code Unordered List</h6>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ul <span className='type'> </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        
                        <span>&#60;/ul&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <img className='types' src={UnorderedList} alt=''/>
            <p>To represent different ordered lists, there are 4 types of attributes in &#60;ul&#62; tag.</p>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Type "disc"</td>
                    <td>This is the default style. In this style, the list items are marked with bullets.</td>
                </tr>
                <tr>
                    <td>Type "circle"</td>
                    <td>In this style, the list items are marked with circles.</td>
                </tr>
                <tr>
                    <td>Type "square"</td>
                    <td>In this style, the list items are marked with squares.</td>
                </tr>
                <tr>
                    <td>Type "none"</td>
                    <td>In this style, the list items are not marked .</td>
                </tr>
            </table>

            <h6>See below code type attribute</h6>
            <div className='code'>
                <span>&#60;!DOCTYPE html&#62;</span><br />
                <span className='html'>&#60;html&#62;</span><br />
                <div className='head'>
                    <span className='head1'>&#60;head&#62;</span><br />
                    <span className='title'>&#60;title&#62; </span> Enter Your Owen Title
                    <span>&#60;/title&#62;</span><br />
                    <span className='head1'>&#60;/head&#62;</span><br />
                    <span className='body'>&#60;body&#62;</span><br />
                    <div className='ol'>
                        <span>&#60;ul <span className='type'> type='square' </span> &#62;</span><br />
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        <p className='ol'>&#60;li&#62; items &#60;/li&#62;</p>
                        
                        <span>&#60;/ul&#62;</span><br />
                    </div>
                    
                    <span className='body'>&#60;/body&#62;</span><br />
                     
                </div>
                <span  className='html'>&#60;/html&#62;</span><br />
                    
            </div>
            <h6>See the output type attribute using square</h6>
            <img className='types' src={UnorderedListSquare} alt='Unordered List Square'/>

            <h5>One example Order list and Unordered List</h5>
            <img src={ExampleOrderUnordered} alt='Example Order Unordered' />
            <img src={ExampleOrderUnorderedOutput} alt='Example Order Unordered Output' />
            <h5>Description List</h5>
            <p>Definition List displays elements in definition form like in dictionary formate.</p>
            <p>The 3 HTML description list tags are given below:</p>
            <ul>
                <li><b>&#60;dl&#62; tag</b> defines the description list.</li>
                <li><b>&#60;dt&#62; tag</b> defines data term.</li>
                <li><b>&#60;dd&#62; tag</b> defines data definition (description).</li>
            </ul>
            <h6>See the below code description list </h6>
            <img src={DescriptionList} alt='DescriptionList' />
            <img src={DescriptionListOutput} alt='DescriptionListOutput' />
    </div>

  )
}

export default ListTags