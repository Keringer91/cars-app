<template>
  <div>
   <h3>All Cars</h3>
   <ul v-for="(car, index) in cars" :key="index">
        <li>
            Car's ID: {{ car.id }}<br>
            Bradn: {{ car.brand }}<br>
            Model: {{ car.model }}<br>
            Year of production: {{ car.year }}<br>
            Engine type: {{ car.engine }}<br>
            Maximum speed: {{ car.maxSpeed }}<br>
            Automatic: {{ car.isAutomatic }}<br>
            Number of doors: {{ car.numberOfDoors }}<br>
            <button @click="editCar(car.id)">Edit</button><br><br>
        </li>
    </ul>
  </div>
</template>

<script>
import { carService } from '../services/Cars'
export default {
  name: 'AppCars',
  data () {
        return {
            cars: []
        }
  },
  methods: {
      editCar(id) {
          this.$router.push("edit/"+id);
      }
  },
  created() {
        carService.getAll().then(response => {
            this.cars = response.data;
        })
  }
}
</script>

<style scoped>
</style>
