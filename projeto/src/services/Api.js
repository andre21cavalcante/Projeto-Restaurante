import axios from "axios";

export const api = axios.create({
    baseURL: "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
})