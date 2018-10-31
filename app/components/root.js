import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import About from './about'
import Projects from './projects'
import Contact from './contact'
import CapstoneProject from './capstone-project'

const Home = () => (
  <div>
    <Link to="/about">
      <div className="logo_cont">
        <span className="headline_welcome">Irene</span>
        <div className="headline_grey">HAKES</div>
      </div>
    </Link>
  </div>
)

const Root = () => {
  return (
    <div>
      <nav className="nav_bar_container">
        <div className="nav_bar">
          <div className="desktop _nav_bar_toggle_show">
            <Link to="/about" className="nav_bar_item">ABOUT</Link>
            <Link to="/projects" className="nav_bar_item">PROJECTS</Link>
            <Link to="/contact" className="nav_bar_item">CONTACT</Link>
            <div className="nav_bar_item"><a href="https://medium.com/@irenehakes">BLOG</a></div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects/StickerGO" component={CapstoneProject} />
          </Switch>
        </div>
        <div className="footer">Irene Hakes | New York, NY | Copyright 2018</div>
      </main>
    </div>
  )
}

export default Root
