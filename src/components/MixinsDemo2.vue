<template>
  <div>
      <h1>Count: {{ count }}</h1>
      <h2>Double: {{ double }}</h2>
      <button @click="increment">Click Me To Increase</button>
  </div>
</template>

<script>
import useCounter from '../mixins/useCounter'

export default {
    setup() {
        const { count, double, increment } = useCounter()
        return {
            count,
            double,
            increment
        }
    }
}
</script>

<style>

</style>