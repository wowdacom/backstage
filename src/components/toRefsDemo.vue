<template>
  <div>
      <div class="introduction">
          <div class="name">姓名：{{ name }}</div>
          <div class="height">身高：{{ height }} 公分</div>
          <div class="weight">體重：{{ weight }} 公斤</div>
          <div class="favFood">最喜歡的食物：{{ favFood }}</div>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const myProfile = reactive({
            name: 'Jim',
            height: 180,
            weight: 75,
            favFood: 'Vegs'
        })

        return {
            ...toRefs(myProfile)
        }
    }
}
</script>

<style>

</style>