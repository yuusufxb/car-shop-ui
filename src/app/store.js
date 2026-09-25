import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/cars/carsSlice"

const Store = configureStore({
    reducer:{
        cars : carsReducer ,
    }
})

export default Store ;