<template>
  <div class="add-edit">
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
            <button @click="editCar(car.id)">Edit</button>
            <button @click="deleteCar(car.id)">Delete</button><br>
        </li>
    </ul>
  </div>
</template>

<script>
import { carService } from "../services/Cars";
export default {
  name: "AppCars",
  data() {
    return {
      cars: []
    };
  },
  methods: {
    editCar(id) {
      this.$router.push("edit/" + id);
    },
    deleteCar(id) {
      if (confirm("Do you really want to delete this car?")) {
        carService.delete(id).then(() => {
          this.$router.go();
        });
      }
    }
  },
  created() {
    carService.getAll().then(response => {
      this.cars = response.data;
    });
  }
};
</script>

<style scoped>
    .add-edit {
        display: inline;
        text-align: center;
    }
    ul {
        list-style-type: none;
    }
</style>
