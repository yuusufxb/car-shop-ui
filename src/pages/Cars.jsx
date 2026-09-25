import {useDispatch , useSelector} from "react-redux";
import { getCars } from "../services/carsApi";
import { useEffect } from "react";
import { setCars } from "../features/cars/carsSlice";
import Card from "../components/Card";
import "./css/cars.css"

export default function Cars(){
    
    const cars = useSelector((state)=> state.cars.cars) ;
    const dispatch = useDispatch() ;
    useEffect(()=>{
        
        getCars()
        .then((Response)=>{
            console.log(Response.data) ;
            dispatch(setCars(Response.data))
        })
        .catch((Error)=>{
            console.log(Error) ;
        })
    },[dispatch])

    return(
        <main className="cars-page">

      <section className="cars-hero">
        <div>
          <p>CAR4YOU</p>

          <h1>
            Find Your
            <span> Perfect Car.</span>
          </h1>

          <p className="hero-description">
            Explore our collection of quality vehicles
            and find the one that's right for you.
          </p>
        </div>
      </section>

      <section className="cars-section">

        <div className="section-header">
          <div>
            <p className="section-label">OUR INVENTORY</p>
            <h2>Cars for Sale</h2>
          </div>

          <span>
            {cars.length} vehicles
          </span>
        </div>

        <div className="cars-grid">
          {cars.map((car) => (
            <Card
              key={car.id}
              car={car}
            />
          ))}
        </div>

      </section>

    </main>
    )
}