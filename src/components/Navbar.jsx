import { Link } from "react-router-dom"
import Home from "../pages/Home"

export default  function Navbar(){
    
    return(
    <>
      <nav>
        <h1>Car4You</h1>
        <Link to={"/"}> Home </Link>
        <Link to={"/cars"}> cars for sale </Link>
        <Link to={"/contacts"}> contact </Link>
        </nav>  
    </>)
}