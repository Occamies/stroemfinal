import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/slider')
  }, [])
  
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <Slider {...settings}>
        {data &&
          data.map((item, index) => (
            <section className="slider" key={index}>
              <div className="img-slider">
              <img className="carousel-image" src={`http://localhost:5333/images/slider/${item.image}`} alt={item.image} />
              </div>
              <div className="cover"/>
              <h1 className='hero-text'  dangerouslySetInnerHTML={{__html: item.caption}}/>
              <Link className='btn slider-btn'>Kontakt Os</Link>

            </section>
          ))
          
        }
      </Slider>


    </>
  )
}

export default Hero;