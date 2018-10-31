import React, { Component } from 'react'

class slideShow extends Component {
  constructor(props) {
    super(props)
    this.slideIndex = 1
    this.plusSlides = this.plusSlides.bind(this)
    this.currentSlide = this.currentSlide.bind(this)
    this.showSlides = this.showSlides.bind(this)
  }

  componentDidMount() {
    this.showSlides(this.slideIndex)
  }
  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  render() {
    return (
      <div>
        {/* slideshow container */}
        <div className="slideshow-container">
          <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
          <div className="mySlides fade">
            <div className="numbertext">1 / 6</div>
            <img src="../home.png" style={{ height: 600 }} />
            {/* <div className="text">Home Page</div> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 6</div>
            <img src="../create.png" style={{ height: 600 }} />
            {/* <div className="text">Create A Room</div> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 6</div>
            <img src="../draw.png" style={{ height: 600 }} />
            {/* <div className="text">Draw The Prompt</div> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">4 / 6</div>
            <img src="../ar.png" style={{ height: 600 }} />
            {/* <div className="text">Place Your Drawing In AR</div> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">5 / 6</div>
            <img src="../vote.png" style={{ height: 600 }} />
            {/* <div className="text">Vote For An Image</div> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">6 / 6</div>
            <img src="../winner.png" style={{ height: 600 }} />
            {/* <div className="text">Winner Is Announced</div> */}
          </div>

          <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
        </div>

        <br />
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => this.currentSlide(1)} />
          <span className="dot" onClick={() => this.currentSlide(2)} />
          <span className="dot" onClick={() => this.currentSlide(3)} />
          <span className="dot" onClick={() => this.currentSlide(4)} />
          <span className="dot" onClick={() => this.currentSlide(5)} />
          <span className="dot" onClick={() => this.currentSlide(6)} />
        </div>
      </div>
    )
  }
}

export default slideShow
