import Error from '../components/Error';
import Loader from "../components/Loader"
import React from "react"
import useRequestData from "../hooks/useRequestData"


const Nyhedsbrev = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  const handleSubmit = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);

    let fd = new FormData(e.target)
    makeRequest('http://localhost:5333/newssubscription',
    {
      "Content-Type":""
    }, null, "POST", fd
    )
    console.log(formData)
    e.target.reset();//empty inputs
  }


  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <form name='addNewsletter' onSubmit={handleSubmit} className='newsletterForm'>
        <input type="email" name="email" id="mail" placeholder='Din Email' />
        <button type='submit' className='btn'>Tilmeld</button>

      </form>
    </>
  )
}

export default Nyhedsbrev;