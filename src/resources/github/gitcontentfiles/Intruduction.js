import React from 'react'
import logogit from "../gitimages/logogit.png";
function Intruduction() {
    return (
        <div className="intruduction">
            <h3>Git and GitHub Intruduction</h3>
            
            <div className="intmaindiv">
                <div className="intleftdiv">
                <h5>What is Git?</h5>
                <ul type="square">
                    <li>Git is free and open source.</li>
                    <li>It is Distributed Version Control system.</li>
                    <li>It is Designed to handle everything from small to Very large project.</li>
                    <li>It is High speed efficiency.</li>
                    <li>Git was Created by Linus Torvalds in 2005 to develop Linux Kernel.</li>
                </ul>
                </div>

                <div className="intright">
                    <img src={logogit} alt="gitimg" />
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

export default Intruduction;
