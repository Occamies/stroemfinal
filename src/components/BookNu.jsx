import Error from '../components/Error';
import Loader from "../components/Loader"
import React from "react"
import useRequestData from "../hooks/useRequestData"

const BookNu = () => {
  const { data, isLoading, error, makeRequest } = useRequestData()
  const handleSubmit = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);

    let fd = new FormData(e.target)
    makeRequest('http://localhost:5333/booking',
    {
      "Content-Type":""
    }, null, "POST", fd
    )
    console.log(formData)
    e.target.reset();//empty inputs
  }
  return (
    <section className='booknu-con'>
      {isLoading && <Loader />}
      {error && <Error />}
      
      <form name='addBooking' onSubmit={handleSubmit} className='addBooking'>
        <h4><span>Book</span> service nu</h4>
        <input type="name" name="name" id="name" placeholder='Dit navn' required />
        <input type="email" name="email" id="mail" placeholder='Din Email' required />
        <input type="phone" name="phone" id="phone" placeholder='Telefon nr.' required />
        <button type='submit' className='btn'>Send</button>

      </form>
    </section>
  )
}

export default BookNu