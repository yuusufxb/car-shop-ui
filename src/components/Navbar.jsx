import { Link } from "react-router-dom"
import "../css/navbar.css"

export default  function Navbar(){
    
    return(
    <>
      <nav className="navbar">
          <h1 className="logo">
            <span>Car</span>4<span>You</span>
          </h1>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cars">Cars for Sale</Link>
            <Link to="/contacts">Contact</Link>
          </div>
      </nav>


    </>)
}