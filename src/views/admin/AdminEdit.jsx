import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

import Error from "../../components/Error"
import Loader from "../../components/Loader"


import useRequestData from "../../hooks/useRequestData"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"


const AdminEdit = () => {
  // the ID is used to get the specified item
  const { ID } = useParams()
  //the site will be left after the "put"
  const navigate = useNavigate()

  //Get og PUT request
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPut, isLoading: isLoadingPut, error: errorPut, makeRequest: makeRequestPut } = useRequestData();

  const refForm = useRef()
  const refQuill = useRef()

  const [quillContent, setQuillContent] = useState('')

  let toolbarOptions = [['bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' }]];

  useEffect(() => {
    if (dataPut && dataPut.rettet) {
      //leaves site after succes
      navigate("/admin/AdminNews")
    } else {
      makeRequest('http://localhost:5333/news/' + ID)
    }
  }, [dataPut])

  

  const handleSubmit = event => {
    event.preventDefault();

    let fd = new FormData(event.target)
    fd.append("content", refQuill.current.value)

    makeRequestPut("http://localhost:5333/news/admin/" + ID,
      { "Content-Type": "multipart/form-data" }, null, "PUT", fd)
  }

  return (
    <section className="create-container">
      <h1>Edit News</h1>

      {(isLoading || isLoadingPut) && <Loader />}

      {(error || errorPut) && <Error />}

      {data &&
        <form onSubmit={handleSubmit} ref={refForm}>

          {/* Titel ... evt. med ref={ refInputTitel } */}
          <input type="text" name="title" defaultValue={data.title} placeholder="Skriv en titel" required className="form-control" />

          {/* Indhold */}
          <ReactQuill
            theme="snow"
            ref={refQuill}
            onChange={setQuillContent}
            defaultValue={data.content}
            placeholder="Nyheds Content (formateret)"
            modules={{ toolbar: toolbarOptions }}
          />

          <p>Nuværende billede: <img src={`http://localhost:5333/images/news/${data.image}`} width="100" /></p>

          <input type="file" name="image" className="form-control" />

          <button type="submit">Edit Product</button>
        </form>

      }

    </section>
  )
}

export default AdminEdit;