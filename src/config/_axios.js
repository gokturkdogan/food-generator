import axios from 'axios';
const BASE_API_URL= "https://67a1f9b4409de5ed5253ca14.mockapi.io/";

const Services = axios.create({baseURL: String(BASE_API_URL)});
 
export default Services;