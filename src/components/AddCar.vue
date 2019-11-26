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
                    <option value="1990">1990</option>
                    <option value="2019">2019</option>
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
      <button @click="addNewCar" type="submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { carService } from '../services/Cars'
export default {
    data() {
     return {
            car: {}
        }
    },
    methods: {
        addNewCar() {
            this.car.isAutomatic = !!this.car.isAutomatic;
            carService.addCar(this.car).then(() => {
            this.$router.push('/cars');
            this.car = {};
        }); 
      }
    }
    
}
</script>

<style>

</style>
