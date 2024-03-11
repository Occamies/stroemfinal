import NavBar from './NavBar';
import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useState, useEffect } from "react"
import useRequestData from "../hooks/useRequestData"

/* icons */
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



const Header = () => {



  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/contactinformation')
  }, [])

  return (
    <>
      <header className='header-container'>
        {isLoading && <Loader />}
        {error && <Error />}
        <section className='header-top'>
          <div className="logo">
            <img src="/assets/logo.png" alt="Strøm Logo" />
          </div>
          <div className="info-container">
            <div className='info-data'>
              <div className="header-icon">
                <FaLocationDot />
              </div>
              {data?.address}
            </div>
            <div className='info-data'>
              <div className="header-icon">
                <FaRegClock />
              </div>
              {data?.openinghours}
            </div>
            <div className='info-data'>
              <div className="header-icon">
                <FaPhoneAlt />
              </div>
              {data?.phone}
            </div>
          </div>
        </section>

      </header>
      <NavBar />
    </>
  )
}

export default Header