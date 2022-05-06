import axios from "axios";

const api = axios.create({
    baseURL:"https://hidden-brushlands-01887.herokuapp.com"})


// const api = axios.create({
//     baseURL: "https://vila-api.herokuapp.com"
// })
    export default api;