<template>
  <div><br>
    <h5 v-if="$route.name === 'edit'">Edit car ID:{{car.id}}</h5>
    <h5 v-else>Register a new car</h5>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul  v-for="(error, index) in errors" :key="index">
            <li>{{ error }}</li>
        </ul>
    </p>
    <form @submit.prevent>
                <label>Brand:</label>
                <input v-model = "car.brand" type="text" id="brand" :minlength="2"><br>
                <label>Model:</label>
                <input v-model = "car.model" type="text" id="model" :minlength="2"><br>
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
                <button @click="checkForm(); $route.name === 'edit' ? editCar() : addNewCar();" type="submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { carService } from "../services/Cars";
export default {
  data() {
    return {
      car: {},
      years: [],
      errors: [],
      id: ""
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.car.brand || this.car.brand.length < 2) {
        this.errors.push("Brand name is not added or too short.");
      }
      if (!this.car.model || this.car.model.length < 2) {
        this.errors.push("Model name is not added or too short.");
      }
      if (!this.car.year) {
        this.errors.push("Year of production is required.");
      }
      if (!this.car.engine) {
        this.errors.push("Engine type is required.");
      }
      if (!this.car.numberOfDoors) {
        this.errors.push("Number of doors is required.");
      }

      if (!this.errors.length) {
        return true;
      }
    },
    addNewCar() {
      if (this.errors.length === 0) {
        this.car.isAutomatic = !!this.car.isAutomatic;
        carService.addCar(this.car).then(() => {
          this.$router.push("/cars");
          this.car = {};
        });
      }
    },
    editCar() {
      if (this.errors.length === 0) {
        this.car.isAutomatic = !!this.car.isAutomatic;
        carService.edit(this.car.id, this.car).then(() => {
          this.$router.push("/cars");
          this.car = {};
        });
      }
    },
    previewCar(car) {
      let displayCar = `Brand: ${car.brand} Model: ${car.model} 
            Year: ${car.year} Max: ${car.maxSpeed} Automatic: ${car.isAutomatic} 
            Engine type: ${car.engine} Number of doors: ${car.numberOfDoors}`;
      alert(displayCar);
    }
  },
  created() {
    this.years = Array(30)
      .fill(1990)
      .map((n, i) => n + i);
    this.id = this.$route.params.id;
    carService.getId(this.id).then(response => {
      this.car = response.data;
    });
  }
};
</script>
<style>
</style>
