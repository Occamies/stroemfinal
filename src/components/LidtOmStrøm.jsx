import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { Link } from 'react-router-dom';


const LidtOmStrøm = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/about')
  }, [])

  return (
    <article className='about-container'>
      {isLoading && <Loader />}
      {error && <Error />}
      <h2>{data?.title}</h2>
      <p>{data?.teaser}</p>
      <Link className='btn'>Læs mere</Link>

    </article>
  )
}

export default LidtOmStrøm