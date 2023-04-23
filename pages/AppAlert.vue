<template>
  <span>
    counter: {{ counter }}
    <slot />
  </span>
</template>
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
