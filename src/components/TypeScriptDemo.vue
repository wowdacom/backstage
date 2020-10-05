<template>
  <div>
      <div class="ts-sample">
          <h1>{{ result }}</h1>
          <h2>{{ age }} and double age {{ doubleCount }}</h2>
          <p>{{ book.title }}</p>
          <p>{{ book.year }}</p>
          <p>{{ book.copyright }}</p>
      </div>
      
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { defineComponent, ref, reactive, computed } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const result = props.name.split('') // correct, 'message' is typed as a string
    const age = ref<string | number>(2020) // year's type: Ref<string | number>
    const book: Book = reactive({ title: 'Vue 3 Guide', year: 1989, copyright: 'Disney' })
    const doubleCount = computed(() => Number(age.value) * 2)

            age.value = '30' // ok!
    return {
        result,
        age,
        book,
        doubleCount
    }
  }
})
</script>

<style>

</style>