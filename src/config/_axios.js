import axios from 'axios';
const BASE_API_URL= "http://localhost:5173";

const Services = axios.create({baseURL: String(BASE_API_URL)});
 
export default Services;