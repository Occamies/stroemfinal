

import React, { useEffect } from "react";
import Loader from "../../components/Loader"
import useRequestData from "../../hooks/useRequestData"
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';



const AdminNews = () => {


  const { data, isLoading, error, makeRequest } = useRequestData()

  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()


  useEffect(() => {
    makeRequest("http://localhost:5333/news")

  }, [dataDelete])


  const handleDelete = (ID, title) => {

    console.log("Service der skal slettes: " + ID)

    if (window.confirm("Er du sikker på at du vil slette services: " + title)) {

      // Call to API - delete product
      makeRequestDelete("http://localhost:5333/news" + ID, { "Content-Type": "multipart/form-data" }, null, "DELETE")

    }
  }

  return (
    <section className="admin-home-container">
      <h1>Admin News</h1>

      {(error || errorDelete) && <Error errorMessage="Admin services" />}

      {(isLoading || isLoadingDelete) && <Loader />}

      <table className="table-container">
        <thead>
          <tr className="admin-tr">
            <th></th>
            <th></th>
            <th>
              <Link to="/admin/adminCreate">
                <AiFillPlusCircle />  Opret ny
              </Link>
            </th>
          </tr>
          <tr className="admin-tr">
            <th>Titel</th>
            <th></th>
            <th>Ret/Slet</th>
          </tr>
        </thead>

        <tbody>
          {
            data && data.map(p =>

              <tr key={p._id} className="admin-tr">
                <td>{p.title}</td>
                <td> <img src={`http://localhost:5039/images/product/${p.productimage}`} alt={p.title} /></td>
                <td>


                  <Link to={"/admin/adminedit/" + p._id} > {/* change link */}
                    <AiFillEdit size="2em" color="darkgreen" className="pointer" />
                  </Link>
                  <AiFillDelete onClick={() => handleDelete(p._id, p.title)} size="2em" className="pointer" />


                </td>
              </tr>

            )
          }

        </tbody>

      </table>

    </section>
  )
}

export default AdminNews