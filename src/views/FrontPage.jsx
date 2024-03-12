import BookNu from "../components/BookNu";
import Hero from "../components/Hero"
import LidtOmStrøm from "../components/LidtOmStrøm";
import NeedHelp from "../components/NeedHelp";
import VoresKunder from "../components/VoresKunder";
import VoresService from "../components/VoresServices";


const FrontPage = ()=> {

  return (
    <>
    <Hero/>
    <LidtOmStrøm/>
    <NeedHelp/>
    <VoresService/>
    <BookNu/>
    <VoresKunder/>
    
    </>
  )
}

export default FrontPage;