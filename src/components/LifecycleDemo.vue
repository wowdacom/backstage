<template>
    <h1>Counting to... {{ likes }}</h1>
    <slot></slot>
</template>

<script>
import { onActivated, onBeforeMount, onDeactivated, onErrorCaptured, onMounted, onUnmounted, onUpdated, onBeforeUnmount, onBeforeUpdate } from 'vue'
export default {
    setup() {
        onBeforeMount(()=>{
            console.log("onBeforeMount")    
        }),
        onMounted(()=>{
            console.log("onMounted")
        }),
        onBeforeUpdate(()=>{
            console.log("onBeforeUpdate")
        }),
        onUpdated(()=>{
            console.log("onUpdated")
        }),
        onBeforeUnmount (()=>{
            console.log("onBeforeUnmount")
        }),
        onUnmounted (()=>{
            console.log("onUnmounted")
        }),
        onActivated (()=>{
            console.log("onActivated")
        }),
        onDeactivated (()=>{
            console.log("onDeactivated")
        }),
        onErrorCaptured (()=>{
            console.log("onErrorCaptured")
        })
    },
    props: {
        likes: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style>

</style>