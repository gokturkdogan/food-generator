import axios from 'axios';
const BASE_API_URL= "https://672f4e42229a881691f2822a.mockapi.io";

const Services = axios.create({baseURL: String(BASE_API_URL)});
 
export default Services;