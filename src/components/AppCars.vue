<template>
  <div>
   <h3>All Cars</h3>
   <ul v-for="(car, index) in cars" :key="index">
        <li>
            {{ car.brand }}<br>
            {{ car.model }}<br>
            {{ car.year }}<br>
            {{ car.id }}<br>
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
  created() {
        carService.getAll().then(response => {
            this.cars = response.data;
        })
  }
}
</script>

<style scoped>
</style>
