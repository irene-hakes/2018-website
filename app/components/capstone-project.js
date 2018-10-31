import React from 'react'

import SlideShow from './slideshow'

const capstoneProject = () => (
  <div>
    <div className="headline">StickerGO</div>
    <div className="about_container">
      <div className="container-div-project">
        <div className="about_text">StickerGO is a multiplayer game on IOS that allows users to create their own 2D stickers that are transportable to any place using AR. Players vote on the best picture depending on the challenge. This project was built using React-Native, Expo, Pixi.js, Three.js on ARKit, Firebase and Amazon Web Services.
        </div>
        <br />
        <div className="linkContainer">
          <a className="project-link" href="https://github.com/StickerGo/StickerGo1">Project's Github</a>
          <a className="project-link" href="https://www.youtube.com/watch?v=7ipWsRYnUI8&feature=youtu.be">Presentation Video</a>
        </div>
      </div>
      <div className="container-div">
        {/* <img className="about_img" src="capstone.jpg" /> */}
        <SlideShow />

      </div>
    </div>
  </div>
)


export default capstoneProject
