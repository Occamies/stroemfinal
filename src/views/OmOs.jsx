import React, { useEffect } from "react"
import useRequestData from "../hooks/useRequestData"
import Error from '../components/Error';
import Loader from "../components/Loader"
import VoresTeam from "../components/VoresTeam";
import VoresKunder from "../components/VoresKunder";
import LidtOmStrøm from "../components/LidtOmStrøm";
import { Link } from "react-router-dom";




const OmOs = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest('http://localhost:5333/about')
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      <LidtOmStrøm />
      <section className="about-us">
        <div className="about-us-text">
          { data &&
              <p dangerouslySetInnerHTML={{__html: data.content}}></p>
          }
          <Link className="btn" to="/Kontakt">Kontakt os</Link>
        </div>
        <img src={`http://localhost:5333/images/about/${data?.image}`} alt={data?.image} />
      </section>
      <VoresKunder />
      <VoresTeam />
    </>
  )
}

export default OmOs