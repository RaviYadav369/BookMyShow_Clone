
import React from 'react'
import HeroSlider from 'react-slick'
import { NextArrow, PrevArrow } from '../HeroCarousel/Arrow-Component';

const EventCarousel = () => {
 

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
        <div className="w-full h-40 md:h-80 py-3">
              <img
                src={`https://assets-in.bmscdn.com/promotions/cms/creatives/1670502375194_web.jpg`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          <div className="w-full h-64 px-2 py-3">
            <img
              src={`https://assets-in.bmscdn.com/promotions/cms/creatives/1670502375194_web.jpg`}
              alt="Hero Banner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="w-full h-64 px-2 py-3">
            <img
              src={`https://assets-in.bmscdn.com/promotions/cms/creatives/1670502375194_web.jpg`}
              alt="Hero Banner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="w-full h-64 px-2 py-3">
            <img
              src={`https://assets-in.bmscdn.com/promotions/cms/creatives/1670502375194_web.jpg`}
              alt="Hero Banner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>

        </HeroSlider>
      </div>
    </>
  );
};
export default EventCarousel