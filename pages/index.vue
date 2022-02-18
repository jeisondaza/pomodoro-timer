<script setup>
import TimerCount from "../components/TimerCount.vue";
</script>
<template>
  <div>
    <h1>Hola desde el home</h1>
    <TimerCount />
    <NuxtLink to="settings">Settings</NuxtLink>
  </div>
</template>
