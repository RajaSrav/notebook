import React, { Component } from 'react'

export default class ReactInstallation extends Component {
    render() {
        return (
            <div className="installation intruduction">

                <h3>React Installation</h3>
                {/* <h5>React Environment Setup</h5> */}

                 <h5>Prerequisites for React JS</h5>
                 <ul type="none">
                     <li>&#128204; NodeJS and NPM</li>
                     <li>&#128204; React and React DOM</li>
                     <li>&#128204; Webpack</li>
                     <li>&#128204; Babel</li>
                 </ul>
                 <h5>How to Install ReactJs SoftWares on Windows</h5>
                 <h6>NodeJS and NPM</h6>
                 <p>&#128073; NodeJS is the platform needed for ReactJS development. Checkout our NodeJS Environment Setup</p>
                 <p>&#128073; There are two ways to set up an environment for a successful ReactJS application. They are given below.</p>
                 <ol>
                     <li>Using the npm command</li>
                     <li>Using the create-react-app command</li>
                 </ol>
                 <p><b>Using the npm command</b></p>
                 <p> You can install NodeJS and NPM package manager by the link given below.</p>
                 <p><span>Download Install NodeJS and NPM </span> <a href="https://nodejs.org/en/"> Click here</a></p>
                 <p>After the download is complete we will go to the downloads folder and run the installer.</p>
                 <p>The installer will show the below Setup image. Click next.</p>
                 <p><b> To verify NodeJS and NPM, use the command shown in the below</b></p>
                 <img src="" alt="installation image"/>
                 <p>The next screen will ask for the End-user License Agreement. Select the checkbox at the bottom right to provide your consent and click on Next to proceed with the installation.</p>
                 <img src="" alt="license image"/>
                 <p>The installer will ask for Destination folder and the default path set by installation is C:\Program Files\nodejs\ Click on Next button</p>
                 <img src="" alt="Destination image"/>
                 <p>Click on Next to continue with the installation.</p>
                 <img src="" alt="con image"/>
                 <p>The Windows OS may ask you to allow Node.js installation and make changes.Click on Yes button.</p>
                 <img src="" alt="finish image"/>
                 <p>Press keys Win+R And type <b>cmd</b> in the window below.</p>
                 <img src="" alt="cmd image"/>
                 <p>Next Click on Ok or Press Enter on the keyboard.</p>
                 <p>After installation of Node.js we need to install React. To check the Node.js version, open the Windows command prompt. </p>
                 <p>In the command line, type <span className="cmd">node -v</span> to see its version. </p>
                 <p>We can also check for npm version, which is installed with Node.js, with the following command <span className="cmd">npm -v</span> </p>
                 <img src="" alt="Version npm node image"/>
            </div>
        )
    }
}
