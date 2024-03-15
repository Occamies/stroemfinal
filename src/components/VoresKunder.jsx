import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VoresKunder = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  const test = useRequestData().data

  useEffect(() => {
    makeRequest('http://localhost:5333/testimonial')
  }, [])

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      gap: 10,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

  return (
    <section className='testimonials-con'>
      {isLoading && <Loader />}
      {error && <Error />}
      <img src="../../public/assets/backgroundimage.jpg" alt="" className='testimonial-bgimage' />
      <div className="bg-cover"></div>
      <div className="testimonial-text">
      <h2>Vores <span>kunder siger</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <section className="testimonial-card-con">

      <Slider {...settings}>

      { data && 
          data.map((item, index)=>(
            <div className='testimonial-card'>
              <img src={`http://localhost:5333/images/testimonial/${item.image}`} className='card-image'  alt={item.image} />
              <h5>{item.name}</h5>
              <p className='card-title'>{item.title}</p>
              <p>{item.review}</p>
            </div>
          ))
          
        }
        </Slider>
        </section>

    </section>
  )
}

export default VoresKunder