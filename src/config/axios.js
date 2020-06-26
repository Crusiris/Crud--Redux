import axios from 'axios';

const clientAxios = axios.create({
    baseURL:'https://servidorcrud.herokuapp.com/'
})

export default clientAxios;

//json-server db.json --port 4000