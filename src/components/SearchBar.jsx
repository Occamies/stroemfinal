
import React from "react"
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const navigate  = useNavigate()


  const onSubmit = (e) => {
    e.preventDefault()
   /*  navigate("/search/") */

    console.log(e.target.innerhtml)
  };

  return (
    <>
    <form action="" className="nav-search" onSubmit={onSubmit}>
      <input type="text" name="text" id="text" placeholder="Søg"/>
      <button></button>
    </form>
    </>
  )
}

export default SearchBar;