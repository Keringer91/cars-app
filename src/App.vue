<template>
  <div id="app">
    <router-link to='/cars'> Cars </router-link>
    <AppCars></AppCars>
  </div>
</template>

<script>
import AppCars from './components/AppCars.vue'

export default {
  name: 'app',
  components: {
    AppCars
  }
}
</script>

<style>
</style>