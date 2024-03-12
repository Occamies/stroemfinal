import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import { NavLink } from 'react-router-dom'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import Nyhedsbrev from '../components/Nyhedsbrev';




const Footer = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/contactinformation')
  }, [])


  return (
    <>
      <footer className='footer-container'>
        {isLoading && <Loader />}
        {error && <Error />}
        <div>
          <img src="/assets/logo.png" alt="Logo" />
          <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO. er vi tilsluttet et ankernævn og en garantiordning</p>
        </div>
        <div>
          <h5>Link</h5>
          <ul className='footer-links'>
            <li>
              <NavLink> FAQ</NavLink>
            </li>
            <li><NavLink> Om os</NavLink></li>
            <li><NavLink> Kontakt os</NavLink></li>
            <li><NavLink> Services</NavLink></li>
          </ul>
        </div>
        <div>
          <h5>Kontakt os</h5>
          <ul>
            <li>Adresse: {data?.address}</li>
            <li>Telefon: {data?.phone}</li>
            <li>Email: {data?.email}</li>
          </ul>
        </div>
        <div>
          <h5>Nyhedsbrev</h5>
          <p>Tilmeld dig vores nyhedsbrev her</p>
          <Nyhedsbrev/>
        </div>
      </footer>
      <section className="copyright">
        <p><span>Strøm</span> © 2017 All Right Reserved</p>
        <div className="some-footer">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaVimeoV /></a>
        </div>
      </section>
    </>
  )
}

export default Footer