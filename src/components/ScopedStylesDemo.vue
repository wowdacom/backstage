<template>
  <div class="box">
      <ScopedStylesDemoLevel2>
          <h1 class="hello">我來自第一層 Slot style 試不太出來</h1>
      </ScopedStylesDemoLevel2>
  </div>
</template>

<script>
import ScopedStylesDemoLevel2 from './ScopedStylesDemoLevel2.vue'

export default {
    components: {
        ScopedStylesDemoLevel2
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.hope) {
    color: red;
}
/* targeting slot content 試不出來 */
::v-slotted(.hello) {
    color: green;
}

/* one-off global rule */
::v-global(.paint) {
    background-color: yellow;
}

</style>