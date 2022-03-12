import React, { Component } from 'react'
import VsCode from '../images/vscode.png'
import Runvs from '../images/runvsc.png'

export default class HtmlInstallation extends Component {
    render() {
        return (
            <div className="installation introduction">

            <h3>Editors </h3>
                         
             <ul>
                 <li>First off, we must ensure that we have the right tools. Most important, we need an editors.</li>
                 <li>There are many choices on the market. Here is a handful of the most popular.</li>
                 <ol>
                     <li><a href='https://atom.io/'>Atom</a></li>
                     <li><a href='https://www.sublimetext.com/download'>SubLimeText</a></li>
                     <li><a href='https://notepad-plus-plus.org/downloads/'>NotePad ++</a></li>
                     <li><a href='https://code.visualstudio.com/download'>VisualStudio</a></li>
                                          
                 </ol>
             </ul>
             <p>Open the Above link and Download Any Editor </p>
             <p>&#127876;I am Downloading VisualStudio Code and You can download Visual Studio code from above URL</p>
             <img src={VsCode} alt='Visual Studio Code'/>
             <p>&#128661;You can click any of the icons mentioned above, depending on the operating system for which you are planning to download the visual studio code editor.</p>
             <p>&#9889;Once it is downloaded, Double-click on the downloaded file to open, Now a dialogue box appears below image</p>
             <img className='imgsize' src={Runvs}  alt="run vscode" />
             <p>Click on the Run Button above image</p>
             {/* img */}
             <p>Select I accept the agreement, Then click on the Next above image </p>
             {/* image */}
             <p>Click on the Next above image</p>
             {/* image */}
             <p>Click on install button above image, after click Wait a bit while it gets installed (The green color fills the bar).</p>
             {/* image */}
             <p>Click Finish to exit Setup. Check in the check box to launch VS Code right now.</p>
             <p>Congratulation! VS Code got installed in your system successfully.</p>
        </div>
        )
    }
}
