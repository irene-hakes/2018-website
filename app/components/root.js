import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import About from './about'
import Projects from './projects'
import Contact from './contact'

const Home = () => (
  <div>
    <a href="about.html">
      <div className="logo_cont">
        <span className="headline_welcome">Irene</span>
        <div className="splash_grey">HAKES</div>
      </div>
    </a>
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
            <div className="nav_bar_item"><a href="blog.html">BLOG</a></div>
          </div>
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  )
}

export default Root
