import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import useRequestData from "../../hooks/useRequestData"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"


const AdminServiceEdit = () => {
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
      navigate("/admin/AdminService")
    } else {
      makeRequest('http://localhost:5333/service/' + ID)
    }
  }, [dataPut])

  
  const handleSubmit = event => {
    event.preventDefault();

    let fd = new FormData(event.target)
    fd.append("content", refQuill.current.value)

    makeRequestPut("http://localhost:5333/service/admin/" + ID,
      { "Content-Type": "multipart/form-data" }, null, "PUT", fd)
  }

  return (
    <section className="create-container">
      <h1>Edit Service</h1>

      {(isLoading || isLoadingPut) && <Loader />}

      {(error || errorPut) && <Error />}

      {data &&
        <form className="admin-textarea" onSubmit={handleSubmit} ref={refForm}>

          {/* Titel ... evt. med ref={ refInputTitel } */}
          <input type="text" name="title" defaultValue={data.title} placeholder="Skriv en titel" required className="form-control" />
          <p>Content tekst</p>
          {/* Indhold */}
          <ReactQuill
            theme="snow"
            ref={refQuill}
            onChange={setQuillContent}
            defaultValue={data.content}
            placeholder="Service Content (formateret)"
            modules={{ toolbar: toolbarOptions }}
          />
          <p>Teaser tekst</p>
        
          <textarea rows="2" name="teaser" placeholder="Skriv Teaser" required defaultValue={data.teaser} maxlength="300"/>
          <p>flaticon</p>
          <input type="text" name="icon" placeholder="Skriv et flaticon navn" required defaultValue={data.icon}/>

          <p className="img-now">Nuværende billede: <img src={`http://localhost:5333/images/service/${data.image}`} width="100" /></p>
          <p>new image</p>
          <input type="file" name="image" className="form-control" />

          <button type="submit">Edit Service</button>
        </form>

      }

    </section>
  )
}

export default AdminServiceEdit;