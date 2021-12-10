import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReactTopics extends Component {
    render() {
        return (
            <div className="leftside">
                <Link className="link1" to="/reactjs/intruduction">&#10148; React Js intruduction</Link><br />
                <Link className="link1" to='/reactjs/installation'>&#10148; React Js Installation</Link> <br /> 
                <Link className="link1" to='/reactjs'>&#10148; React JS Project Creation</Link><br />
                <Link className="link1" to='/reactjs'>&#10148; Git & GitHub</Link><br />
                <Link className="link1" to='/reactjs'>&#10148; Git Commands</Link><br />
                <Link className="link1" to='/reactjs'>&#10148; GitHub Acount Creation</Link><br />
                <Link className="link1" to='/reactjs'>&#10148; Git Configurations</Link><br />
                <Link className="link1" to="/reactjs">&#10148; Git Commits</Link><br />
                <Link className="link1" to='/reactjs'>&#10148; Procedure to push prject into central repository</Link> <br /> 
                <Link className="link1" to='/reactjs'>&#10148; Git Remote</Link><br />

            </div>
        )
    }
}
