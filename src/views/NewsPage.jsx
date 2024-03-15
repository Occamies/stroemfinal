import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { NavLink } from 'react-router-dom';

const NewsPage = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/news')
  }, [])
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <div className="newspage-con">
        <div>
          <section className='mainpart-news'>
            <section className="mainpart-con">
              {data &&
                data.slice(0,4).map((item, index) => (
                  <NavLink to={"/News/NewsSubpage/" + item._id} className="news-page-card">
                    <div className='news-date'>DATE</div>
                    <img src={`http://localhost:5333/images/news/${item.image}`} alt={item.image} />

                    <div className="news-text">
                      <h4>{item.title}</h4>
                      <p dangerouslySetInnerHTML={{__html:item.content.substring(0, 150)}}></p>
                      <div className="news-hr"></div>
                      <p>kommentarer: {item.comments.length}</p>
                    </div>

                  </NavLink>
                ))
              }
            </section>
            


          </section>

        </div>
        <section className="sidemenu">
          <h4>Arkiv</h4>
          {data &&
            data.slice(0, 4).map((item, index) => (
              <>
                <div className="arkiv-card">
                  <img src={`http://localhost:5333/images/news/${item.image}`} alt={item.image} />
                  <article className='arkiv-card-text'>
                    <h5>{item.title}</h5>
                    <p>{item.received}</p>
                  </article>
                </div>
                <div className='news-hr'></div>
              </>
            ))

          }
        </section>
      </div>
    </>
  )
}

export default NewsPage