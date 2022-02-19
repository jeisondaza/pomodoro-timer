<script setup lang="ts">
interface Props {
  minutes: number;
}

const props = defineProps<Props>();

const { minutes, seconds, start, pause, reset } = useCountDown(props.minutes);

const formatTime = (time: number): string =>
  time > 9 ? time.toString() : `0${time}`;
</script>

<template>
  <article>
    <h2>{{ formatTime(minutes) }} : {{ formatTime(seconds) }}</h2>
    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="reset">Reset</button>
  </article>
</template>
