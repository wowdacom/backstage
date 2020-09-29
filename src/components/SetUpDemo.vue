<template>
  <button @click="inc">Setup Counter: {{ counter }}</button>
</template>

<script setup>
import { ref } from 'vue'; 

export const counter = ref(0)
export const inc = ()=> counter.value++
</script>

<style>

</style>