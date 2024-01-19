import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../assets/slider-img1.png";
import sliderImage2 from "../assets/slider-img2.png";
import sliderImage3 from "../assets/slider-img3.png";
import sliderImage4 from "../assets/slider-img4.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider-section overflow-hidden">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <img src={sliderImage2} alt="" />
          </div>
          <div>
            <img src={sliderImage1} alt="" />
          </div>
          <div>
            <img src={sliderImage3} alt="" />
            
          </div>
          <div>
            <img src={sliderImage4} alt="" />
            
          </div>
        </Slider>
      </div>
    );
  }
}
