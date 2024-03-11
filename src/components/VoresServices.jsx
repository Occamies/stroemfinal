import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"




const VoresService = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/service')
  }, [])
  return (
    <article className='service-con'>
      {isLoading && <Loader />}
      {error && <Error />}
      <h3>Vores <span> services</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <section className='vores-service-container'>
        <section className='service-con'>

          {data &&
            data.map((item, index) => (
              <div className="showservice-card">
                <div></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.teaser}</p>
                </div>
              </div>
            ))
          }
        </section>
        <img src="/assets/about/1.png" alt="vores service billede" />
      </section>
    </article>
  )
}

export default VoresService;