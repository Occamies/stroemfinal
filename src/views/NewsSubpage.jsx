import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { useParams } from 'react-router-dom';


const NewsSubpage = () => {

  const { ID } = useParams()

  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataComment, isLoading: isLoadingComment, error: errorComment, makeRequest: makeRequestComment } = useRequestData()
  const { data: dataArkiv, isLoading: isLoadingArkiv, error: errorArkiv, makeRequest: makeRequestArkiv } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/news/' + ID)
    makeRequestArkiv('http://localhost:5333/news')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let fd = new FormData(e.target)
    makeRequestComment('http://localhost:5333/news/comment/' + ID,
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    console.log(formData)
    e.target.reset();//empty inputs
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}

      <div className="news-con">
        <div>
          <section className='mainpart-news'>
            <img src={`http://localhost:5333/images/news/${data?.image}`} alt={data?.image} />
            <article>
              <p>{data?.comments.length} kommentarere</p>
              <h2>{data?.title}</h2>
              <div className='news-hr'></div>
              <p className='news-content'>{data?.content}</p>
            </article>
          </section >
          <section className="comments">
            <h5>Kommentarer: {data?.comments.length}</h5>
            {data &&
              data.comments.map((item, index) => (
                <div className="comment-card" >
                  <h4>{item.name}</h4>
                  <p>{item.received}</p>
                  <p>{item.comment}</p>
                </div>
              ))

            }
            <form name='addComment' onSubmit={handleSubmit} className='commentForm'>
              <div>
              <input type="name" name="name" id="name" placeholder='Navn' required/>
              <input type="email" name="email" id="email" placeholder='Email' />
              </div>
              <textarea required name='comment' id='' rows="5" placeholder='Kommentar'/>
              <button type='submit' className='btn'>Send besked</button>

            </form>
          </section>
          <div className='news-hr'></div>
          <form action=""></form>
        </div>
        <section className="sidemenu">
          <h4>Arkiv</h4>
          {dataArkiv &&
            dataArkiv.slice(0, 4).map((item, index) => (
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

export default NewsSubpage;