<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-dashboard">
          台幣: {{ counterRef }}<br />
          美金: {{ showFormated }} <br />
          目前顏色： {{ showDistanceColor }}
        </div>
        <div class="col-12">
          <button
            @click="start"
            type="button"
            class="btn btn-primary btn-sm mr-1"
          >
            開始計時
          </button>
          <button
            @click="reset"
            type="button"
            class="btn btn-danger btn-sm mr-1"
          >
            重置
          </button>
          <button
            @click="goon"
            type="button"
            class="btn btn-success btn-sm mr-1"
          >
            繼續
          </button>
          <button
            @click="pause"
            type="button"
            class="btn btn-secondary btn-sm ml-1"
          >
            暫停
          </button>
        </div>
      </div>
    </div>
    <teleport to="#popup">
      <div v-if="true" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { useCssVars, onMounted, computed, ref } from "vue";

export default {
  setup() {
    const timerRef = ref(0);
    const counterRef = ref(0);
    const distanceColor = ref("rgb(0, 0, 0)");
    const modalOpen = ref(true);

    // life cycle
    onMounted(() => {
      // console.log(typeof timerRef.value)
      // console.log(timerRef.value)
    });

    // computed
    const showFormated = computed(() =>
      new Intl.NumberFormat("en-US").format(counterRef.value / 28.78)
    );
    const showDistanceColor = computed(
      () =>
        (distanceColor.value = `rgb(${counterRef.value},${counterRef.value}, ${counterRef.value})`)
    );

    //method
    const start = () => {
      if (timerRef.value === 0) {
        timerRef.value = setInterval(() => {
          counterRef.value++;
        }, 1000);
      }
    };

    const reset = () => {
      clearInterval(timerRef.value);
      timerRef.value = 0;
      counterRef.value = 0;
    };
    const goon = () => {
      if (timerRef.value !== 0) {
        clearInterval(timerRef.value);
        timerRef.value = setInterval(() => counterRef.value++, 1000);
      }
    };
    const pause = () => {
      if (timerRef.value !== 0) {
        clearInterval(timerRef.value);
      }
    };

    // 寫到以上基本的就可以用了，以下 watch 跟 computed
    useCssVars(() => ({
      "main-distance-color": showDistanceColor,
    }));

    return {
      start,
      reset,
      counterRef,
      showFormated,
      showDistanceColor,
      modalOpen,
      goon,
      pause,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-dashboard {
  color: var(--main-distance-color);
}
</style>