<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <AppAlert />
  </div>
</template>
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
