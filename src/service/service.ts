import axios from "axios"

const BaseURL='http://localhost:8080/';

const Service=axios.create({
    baseURL:BaseURL,
    method:'post',
    headers:{
        'ContentType':'application/json;charset=UTF-8'
    }
})

export default Service