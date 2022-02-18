<script setup lang="ts">
import { ref } from "nuxt3/dist/app/compat/capi";

const seconds = ref<number>(59);
const minutes = ref<number>(39);

const counter = () => {
  if (seconds.value > 0) {
    seconds.value--;
  } else if (minutes.value === 0 && seconds.value === 0) {
    clearInterval(secondsDown);
  } else {
    minutes.value--;
    seconds.value = 59;
  }
};
const secondsDown = setInterval(counter, 1000);
const formatTime = (time: number): string =>
  time > 9 ? time.toString() : `0${time}`;
</script>

<template>
  <h2>{{ formatTime(minutes) }} : {{ formatTime(seconds) }}</h2>
</template>
