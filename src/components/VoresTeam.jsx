import Error from '../components/Error';
import Loader from "../components/Loader"
import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";


const VoresTeam = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/team')
  }, [])

  return (
    <article className='team-con'>
      {isLoading && <Loader />}
      {error && <Error />}
      <h2>Vores <span>team</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <section className='team-card-con'>

        {data &&
          data.map((item, index) => (
            <div className="team-card" key={index}>
              <img src={`http://localhost:5333/images/team/${item.image}`} alt={item.image} />
              <div className="card-info">
                <h4>{item.name}</h4>
                <p>{item.title}</p>
                <div className="team-some">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaVimeoV /></a>
                </div>
              </div>
            </div>
          ))

        }
      </section>
    </article>
  )
}

export default VoresTeam;