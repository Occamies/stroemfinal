import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"

const Footer = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/contactinformation')
  }, [])


  return (
    <footer className='footer-container'>
      {isLoading && <Loader />}
      {error && <Error />}
      <div>
        <img src="/assets/logo.png" alt="Logo" />
        <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO. er vi tilsluttet et ankernævn og en garantiordning</p>
      </div>

    </footer>
  )
}

export default Footer