import axios from 'axios';
export default class CarService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll() {
        return axios.get('/cars');
    }

    addCar(car) {
        return axios.post('/cars', car);
    }

    getId(id) {
        return axios.get('/cars/' + id);
    }

    edit(id, car) {
        return axios.put('/cars/' + id, car);
    }

    delete(id) {
        return axios.delete('/cars/' + id);
    }
}

export const carService = new CarService();