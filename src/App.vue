<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to='/cars'> Cars </router-link>
      <router-link class="router-link" to='/add'> Add car </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
  .router-link {
    padding: 10px;
  }
</style>