<template>
  <div>
      <slot></slot>
      <ScopedStylesDemoLevel3></ScopedStylesDemoLevel3>
  </div>
</template>

<script>
import ScopedStylesDemoLevel3 from './ScopedStylesDemoLevel3.vue'

export default {
    components: {
        ScopedStylesDemoLevel3
    }
}
</script>

<style lang="scss" scoped>

</style>