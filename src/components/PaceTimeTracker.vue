<template>
  <div>
    <div class="container-fluid mb-5">
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
  </div>
  <div>
    <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>Hello teleport tag</h1>
            <div class="open-popup">
              <button @click="modalOpen = true">OPEN teleport popup</button>
            </div>
            <teleport to="#popup-box">
              <div v-if="modalOpen" class="pace-time-tracker-popup-box">
                <div class="pace-time-tracker-popup-box-content">
                  <h1>Hello Teleport</h1>
                  <button @click="modalOpen = false">CLOSE</button>
                </div>
              </div>
            </teleport>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>各位觀眾!這個寫法在 Vue2 是不行的</h1>
            <p>
              這是 Vue3 Fragments 的功能，主要就是以前 Component 都要用 div
              包起來，現在就不用
            </p>
            <p>
              可參考文件
              <a
                href="https://v3.vuejs.org/guide/migration/fragments.html"
                sytle="color: #41B883"
                target="_blank"
                >fragments</a
              >
            </p>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>Hello emit</h1>
            <custom-form @click="submitForm('wowdacom', 'sdasd')"></custom-form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { useCssVars, onMounted, computed, ref } from "vue";

export default {
  setup() {
    const timerRef = ref(0);
    const counterRef = ref(0);
    const distanceColor = ref("rgb(0, 0, 0)");
    const modalOpen = ref(false);
    
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
.pace-time-tracker-popup-box {
  width: 100vw;
  height: 100vh;
  position: relative;
  .pace-time-tracker-popup-box-content {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px #42b883;
    border-radius: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
    transition: all 1s;
  }
}
</style>