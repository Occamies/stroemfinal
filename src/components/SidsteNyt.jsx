import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { NavLink } from 'react-router-dom';


const SidsteNyt = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/news')
  }, [])


  return (
    <article className='news-con'>
      {isLoading && <Loader />}
      {error && <Error />}
      <h2>Sidste <span>nyt</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <div className="news-card-con">
        {data &&
          data.slice(0, 3).map((item, index) => (
            <NavLink className="news-card">
              <div className='news-date'>DATE</div>
              <img src={`http://localhost:5333/images/news/${item.image}`} alt={item.image} />

              <div className="news-text">
                <h4>{item.title}</h4>
                <p>{item.content.substring(0, 150)}...</p>
              </div>

            </NavLink>
          ))
        }
      </div>
    </article>
  )

}

export default SidsteNyt;