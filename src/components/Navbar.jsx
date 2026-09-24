import { Link } from "react-router-dom"
import Home from "../pages/Home"

export default  function Navbar(){
    
    return(
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        </nav>  
    </>)
}