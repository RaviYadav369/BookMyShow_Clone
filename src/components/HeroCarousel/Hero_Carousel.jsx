import axios from 'axios';
import React, { useState,useEffect } from 'react'
import HeroSlider from 'react-slick'
import { NextArrow, PrevArrow } from './Arrow-Component';

const HeroCarousel = () => {

  const [images,setimages] = useState([]);
  useEffect(() => {
    const requestTopRatedPoster = async()=>{
      const getTopRatedPoster = await axios.get("/movie/top_rated");
      setimages(getTopRatedPoster.data.results);
    }
  
  requestTopRatedPoster()
  }, [])
  

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
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};
export default HeroCarousel