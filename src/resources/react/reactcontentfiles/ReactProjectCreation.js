import React from 'react'
import CreateReactApp from '../images/createReactapp.png'
import CreateReactApp1 from '../images/createReactapp1.png'

export default function ReactProjectCreation() {
    return (
        <div className='projectcreation'>
            <h2>React Project Creation</h2>
            <p>&#128395; After the installation of React, you can create a new react project using the create-react-app command. Here, I choose a simple name for my project.</p>
            <p>&#128395; Open Command prompt and redirect D drive or e drive or any location your computer, Enter below Cmd <b className='cmd'>npx create-react-app project-name</b></p>
            <p className='note'>  <h4>&#128390;NOTE:</h4> You can combine the above two steps in a single command using npx. The npx is a package runner tool that comes with npm 5.2 and above versions.</p>
            <p>&#128395; The above command will take some time to install the React and create a new project with the name "simple." Now, we can see the Command Prompt as shown below.</p>
            <img src={CreateReactApp} alt='Create React App' />
            <img src={CreateReactApp1} alt='Create React App' />
            <p>&#128395;The above screen tells us that the React project is created successfully on our system.</p>
            
        </div>
    )
}
