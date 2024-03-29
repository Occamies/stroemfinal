import { useRef, useEffect, useState } from 'react'

import ReactQuill, { contextType } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Error from '../../components/Error'
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'
import useThumb from '../../hooks/useThumb'
import { useNavigate } from 'react-router-dom'

const AdminCreate = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  const [makeThumb, thumbImage] = useThumb()

  const refForm = useRef();

  const [quillContent, setQuillContent] = useState("")

  let toolbarOptions = [['bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' }]];

  const navigate = useNavigate()

  useEffect(() => {
    if (data && data.service) {

      //empty all fields after its sent
      refForm.current.reset();

      //this empty the quill field
      setQuillContent("")
    }
  }, [data])


  const handleSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target)
    fd.append("content", quillContent) //quill is a div and not part of the normal formdata, so this includes this
    makeRequest("http://localhost:5333/news/admin", { "Content-Type": "multipart/form-data" }, null, "POST", fd)

    navigate("/admin/AdminNews")
  }

  return (
    <section className='create-container'>
      <h1>Ny Nyhed</h1>
      {isLoading && <Loader />}
      {error && <Error />}
      {
        data && <article>{data.title} is created with ID: {data._id}</article>
      }

      <form onSubmit={handleSubmit} ref={refForm}>
        <input type="text" name="title" placeholder="Write a title" required />

        <ReactQuill
          theme="snow"
          onChange={setQuillContent}
          value={quillContent}
          placeholder="Lang produktbeskrivelse (formateret)"
          modules={{ toolbar: toolbarOptions }}
          required
        />

        <input type="file" name="image" onChange={e => makeThumb(e.target.files[0])} required className="form-control" />
        {
          thumbImage && thumbImage
        }

        <button type="submit">Opret Nyhed</button>
      </form>


    </section>
  )
}

export default AdminCreate;