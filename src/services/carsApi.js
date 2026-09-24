import axios from "axios";

const BASE_URL = "localhost:8080/cars" ;

export const getCars = () => {
    return axios.get(BASE_URL)
}

export const getCarById = (id) =>{
    return axios.get(BASE_URL+"/"+id)
}
