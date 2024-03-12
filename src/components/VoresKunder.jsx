import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VoresKunder = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/testimonial')
  }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrow: false
    };
    
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <h2>Vores <span>kunder siger</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Slider {...settings}>

      { data && 
          data.map((item, index)=>(
            <div>
              <img src={`http://localhost:5333/images/testimonial/${item.image}`}  alt={item.image} />
              <h5>{item.name}</h5>
              <p>{item.title}</p>
              <p>{item.review}</p>
            </div>
          ))
          
        }
        </Slider>

    </>
  )
}

export default VoresKunder