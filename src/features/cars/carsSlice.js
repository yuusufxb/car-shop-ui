import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars : [] ,
}

const carsSlice = createSlice(
{
    name : "cars" ,
    initialState ,
    reducers:{
        setCars:(state,action)=>{
            state.cars = action.payload ;
            
        },
        addCar:(state,action)=>{
            state.cars.push(action.payload) ;
        },
        removeCar:(state,action)=>{
            state.cars = state.cars.filter((car)=>
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