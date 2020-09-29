<template>
  <div class="box">
      <h1>我是最深層</h1>
      <ul>
          <li :key="i" v-for="(item, i) in userLocation">
              {{ item }}
          </li>
      </ul>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
    setup() {
        const userLocation = inject('location')

        return {
            userLocation
        }
    }
}
</script>

<style lang="scss" scoped>


</style>