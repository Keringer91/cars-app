<template>
  <div id="app">
    <router-link to='/cars'> Cars </router-link>
    <router-link to='/add'> Add car </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>