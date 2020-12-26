<template>
  <div id="app">
    <apitest/>
  </div>
</template>

<script>
import apitest from './components/apitest.vue'

export default {
  name: 'App',
  components: {
    apitest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
