<script setup></script>
<template>
  <div>
    <h1>Hola desde el home</h1>
    <TimerCount :minutes="1" />
    <!-- <TimerCount :minutes="20" /> -->
    <NuxtLink to="settings">Settings</NuxtLink>
  </div>
</template>
