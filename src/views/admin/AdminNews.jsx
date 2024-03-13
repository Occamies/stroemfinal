

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

    console.log("Nyhed der skal slettes: " + ID)

    if (window.confirm("Er du sikker på at du vil slette services: " + title)) {

      // Call to API - delete product
      makeRequestDelete("http://localhost:5333/news/admin/" + ID, { "Content-Type": "multipart/form-data" }, null, "DELETE")

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
            data && data.map(item =>

              <tr key={item._id} className="admin-tr">
                <td className="admin-td">{item.title} <img src={`http://localhost:5333/images/news/${item.image}`} alt={item.title} className="admin-img" /></td>
                <td>


                  <Link to={"/Admin/AdminEdit/" + item._id} >
                    <AiFillEdit size="2em" color="green" className="pointer" />
                  </Link>
                  <AiFillDelete onClick={() => handleDelete(item._id, item.title)} size="2em" className="pointer" />


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