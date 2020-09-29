<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PaceTimeTracker
    @sending-start="handleStart"
    @sending-complete="handleComplete"
  ></PaceTimeTracker>
</template>

<script>
import PaceTimeTracker from './components/PaceTimeTracker.vue'

export default {
  name: 'App',
  components: {
    PaceTimeTracker,
  },
  methods: {
    handleStart() {
      console.log('sending start \u{1f605}')
    },
    handleComplete() {
      console.log('sending complete \u{01F354}')
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.modal {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
</style>
