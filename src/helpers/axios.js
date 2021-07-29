import axios from 'axios';
import { apiUrl } from '../urlConfig';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    // headers:{
    //     'Authorization':''
    // }
})

export default axiosInstance