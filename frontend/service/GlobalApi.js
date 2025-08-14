const { default: axios } = require("axios");


const API_KEY = import.meta.VITE_STRAPI_API_KEY;
const axoisClient = axios.create({
  baseURL:'',
  headers:{
    'Content-Type':'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
})