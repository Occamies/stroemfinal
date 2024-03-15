import BookNu from "../components/BookNu";
import Hero from "../components/Hero"
import LidtOmStrøm from "../components/LidtOmStrøm";
import NeedHelp from "../components/NeedHelp";
import SidsteNyt from "../components/SidsteNyt";
import VoresKunder from "../components/VoresKunder";
import VoresService from "../components/VoresServices";
import VoresTeam from "../components/VoresTeam";


const FrontPage = ()=> {

  return (
    <>
    <Hero/>
    <LidtOmStrøm/>
    <NeedHelp/>
    <VoresService/>
    <BookNu/>
    <VoresKunder/>
    <VoresTeam />
    <SidsteNyt/>
    </>
  )
}

export default FrontPage;