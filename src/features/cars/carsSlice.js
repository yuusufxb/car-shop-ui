import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars : [] ,
    loading : false ,
    error : null 
}

const carsSlice = createSlice(
{
    name : "cars" ,
    initialState ,
    reducers:{
        setCars:(state,action)=>{
            initialState.cars = action.payload ;
            
        },
        addCar:(state,action)=>{
            initialState.cars.push(action.payload) ;
        },
        removeCar:(state,action)=>{
            initialState.cars = initialState.cars.filter((car)=>
                car.id !== action.payload
            )
        },
    }

}
);

export const{
    setCars , addCar , removeCar
} = carsSlice.actions ;

export default carsSlice.reducer ;