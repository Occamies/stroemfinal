import React, { useEffect, useState } from "react"
import useRequestData from "../hooks/useRequestData"
import Error from '../components/Error';
import Loader from "../components/Loader"





const Service = () => {

  const [content, setContent] = useState(0)

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/service')
  }, [])

  const HandleClick =(index)=> {
    setContent(index)

  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
          { data && 
      <section className="servicePage-con">
        <nav className="service-nav">
            {

              data.map((item, index) => (
                <button key={index} onClick={()=>HandleClick(index)}>{item.title} &rarr;</button>
                ))
              }
        </nav>
        <article className="service-article">
          <img src={`http://localhost:5333/images/service/${data[content].image}`} alt={data.image} />
          <h2>{data[content].title}</h2>
          <p dangerouslySetInnerHTML={{__html: data[content].content}}></p>
        </article>
      </section>
          }
    </>
  )
}

export default Service