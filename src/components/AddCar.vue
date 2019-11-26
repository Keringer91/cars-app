<template>
  <div><br>
    <h5>Add a new post: </h5>
    <form @submit.prevent>
                <label>Brand:</label>
                <input v-model = "car.brand" type="text" id="brand"><br>
                <label>Model:</label>
                <input v-model = "car.model" type="text" id="model"><br>
                <label>Year:</label>
                <select v-model = "car.year">
                    <option disabled value="">Select year</option>
                    <option v-for="(year, index) in years" :key="index">{{ year }}</option>
                </select><br>
                <label>Max speed:</label>
                <input v-model.number="car.maxSpeed" type="number"><br>           
                <label>Automatic:</label>
                <input type="checkbox" id="checkbox" v-model="car.isAutomatic"><br>
                <label>Engine:</label><br>
                <input type="radio" id="petrol" value="petrol" v-model="car.engine">
                <label for="petrol">Petrol</label>
                <br>
                <input type="radio" id="diesel" value="diesel" v-model="car.engine">
                <label for="diesel">Diesel</label>
                <br>
                <label>Number of doors:</label>
                <input v-model.number = "car.numberOfDoors" type="number"><br>
                <input type="button" value="Reset Form" onClick="this.form.reset()"/><br><br>
                <button @click="previewCar(car)">Preview</button><br><br>
                <button @click="addNewCar" type="submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { carService } from '../services/Cars'
export default {
    data() {
     return {
            car: {},
            years: [1,2,3,4]
        }
    },
    methods: {
        addNewCar() {
            this.car.isAutomatic = !!this.car.isAutomatic;
            carService.addCar(this.car).then(() => {
                this.$router.push('/cars');
                this.car = {};
            }); 
        },
        previewCar(car) {
            let displayCar = `Brand: ${car.brand} Model: ${car.model} 
            Year: ${car.year} Max: ${car.maxSpeed} Automatic: ${car.isAutomatic} 
            Engine type: ${car.engine} Number of doors: ${car.numberOfDoors}`;
            alert(displayCar);
        },
    },

    created() {
        this.years = Array(20).fill(1990).map((n, i) => n + i);
    }
    
}
</script>

<style>

</style>
