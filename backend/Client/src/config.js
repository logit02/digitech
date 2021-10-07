import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://alterrrapp.herokuapp.com/"
})