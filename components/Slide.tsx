'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface SlideHandle {
  next: () => void;
  prev: () => void;
}

const Slide = forwardRef<SlideHandle>((_, ref) => {
  const sliderRef = useRef<Slider>(null);

  useImperativeHandle(ref, () => ({
    next: () => sliderRef.current?.slickNext(),
    prev: () => sliderRef.current?.slickPrev(),
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

    return (
        <Slider ref={sliderRef} {...settings} className="slider1">
                <div>
                  <video
                    width="1000"
                    height="500"
                    controls
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <video
                    width="1000"
                    height="500"
                    controls
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상2.mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <video
                    width="1000"
                    height="500"
                    controls
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/공장영상3.mp4" type="video/mp4" />
                  </video>
                </div>
              </Slider>
    )
})

Slide.displayName = 'Slide';
export default Slide;