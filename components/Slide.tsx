'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide2() {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

    return (
        <Slider {...settings} className="slider1">
                <div>
                  <video
                    width="640"
                    height="360"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <video
                    width="640"
                    height="360"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상2.mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <video
                    width="640"
                    height="360"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상3.mp4" type="video/mp4" />
                  </video>
                </div>
              </Slider>
    )
}