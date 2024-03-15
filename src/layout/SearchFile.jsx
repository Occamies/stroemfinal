import React, { useEffect } from "react";
import Loader from "../components/Loader"
import useRequestData from "../hooks/useRequestData"
import Error from "../components/Error";
import { NavLink, useParams } from "react-router-dom";

const SearchFile = ()=> {

  const ID = useParams();

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5333/search/" + ID)
  }, [])

  console.log(data?.searchresult.news)

  return(
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <div className="newspage-con">
        <div>
          <section className='mainpart-news'>
            <section className="mainpart-con">
              {data &&
                data?.searchresult.news.map((item, index) => (
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
      </div>
    </>
  )
}

export default SearchFile;