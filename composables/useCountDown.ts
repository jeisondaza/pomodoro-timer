import { ref } from "nuxt3/dist/app/compat/capi";

export const useCountDown = (time: number) => {
  const minutes = ref(time);
  const seconds = ref(0);

  const counter = () => {
    if (seconds.value > 0) {
      seconds.value--;
    } else if (minutes.value === 0 && seconds.value === 0) {
      pause();
    } else {
      minutes.value--;
      seconds.value = 59;
    }
  };

  const start = (): NodeJS.Timer => (timer = setInterval(counter, 1000));
  const pause = (): void => clearInterval(timer);
  const reset = () => {
    pause();
    minutes.value = time;
    seconds.value = 0;
  };

  let timer: NodeJS.Timer;
  return { minutes, seconds, start, pause, reset };
};
