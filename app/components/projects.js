import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

const projects = () => (
  <div className="project_container">
    <div className="project-container-div">Project Coming Soon!</div>
    <div className="project-container-div-dud"></div>
    <div className="project-container-div">Project Coming Soon!</div>
    <div className="project-container-div-dud"></div>
    <Link to="/projects/StickerGO" className="project-container-div">StickerGO</Link>
    <div className="project-container-div-dud"></div>
    <div className="project-container-div">Project Coming Soon!</div>
    <div className="project-container-div-dud"></div>
    <div className="project-container-div">Project Coming Soon!</div>
  </div>
)

export default projects
