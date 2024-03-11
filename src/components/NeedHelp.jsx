import { Link } from "react-router-dom";

const NeedHelp = ()=> {
  return (
    <article className="need-help-con">
    <h2>Skal du bruge <span>hjælp </span>fra <span>Strøm</span></h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <Link className='btn'>Kontakt os</Link>
    
    </article>
  )
}

export default NeedHelp;