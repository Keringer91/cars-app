import axios from 'axios';


export default class CarService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll() {
        return axios.get('/cars');
    }
}


export const carService = new  CarService();