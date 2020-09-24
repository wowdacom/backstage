<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PaceTimeTracker></PaceTimeTracker>
</template>

<script>
import PaceTimeTracker from './components/PaceTimeTracker.vue'

export default {
  name: 'App',
  components: {
    PaceTimeTracker
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
