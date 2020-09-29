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
            <h1>Hello Validate Emitted Events</h1>
            <button @click="sendData">Try $Emit</button>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>Hello Setup component</h1>
            <SetUpDemo></SetUpDemo>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>Hello Lifecycle component</h1>
            <div v-if="isLifeClose">
              <LifecycleDemo
                :likes="currentLike"
              >
                <button type="button" @click="handleLifeLikes" class="btn btn-info mr-3">Add</button>
                <button type="button" @click="handleLifeReset" class="btn btn-secondary ml-3 mr-3">Reset</button>
                <button type="button" @click="handleCloseCountering" class="btn btn-warning ml-3">關閉/開啟</button>
              </LifecycleDemo>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-12">
            <h1>Hello Scoped Styles </h1>
            <ScopedStylesDemo></ScopedStylesDemo>
          </div>
        </div>
      </div>
  </div>
  <div>
    <hr />
      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-12">
            <h1>Hello Provide / Inject</h1>
            <ProvideInjectDemo></ProvideInjectDemo>
            <h2>{{ location }}</h2>
            <button type="button" @click="handleMove" class="btn btn-warning">移動</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { useCssVars, onMounted, computed, ref, reactive, provide } from "vue";
import SetUpDemo from './SetUpDemo.vue'
import LifecycleDemo from './LifecycleDemo.vue'
import ScopedStylesDemo from './ScopedStylesDemo.vue'
import ProvideInjectDemo from  './ProvideInjectDemo.vue'

export default {
  data () {
    return {
      isLifeClose: true,
      currentLike: 0
    }
  },
  // provide: {
  //   location: ["我來自 PaceTime 項目一", "我來自 PaceTime 項目二", "我來自 PaceTime 項目三", "我來自 PaceTime 項目四"]
  // },
  setup() {
    const timerRef = ref(0);
    const counterRef = ref(0);
    const distanceColor = ref("rgb(0, 0, 0)");
    const modalOpen = ref(false);
    const obj = reactive({ 
      count: 0 
    })
    const location = ref(["我來自 PaceTime 項目一", "我來自 PaceTime 項目二", "我來自 PaceTime 項目三", "我來自 PaceTime 項目四"])
    const trafficPath = ref(["Taiwan", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan"])
    const pace = ref(0)

    provide('location', location)
    
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
    const handleMove = () => {
      if (pace.value < trafficPath.value.length) {
        pace.value++
        location.value[0] = trafficPath.value[pace.value]
      } else {
        pace.value = 0
        location.value[0] = trafficPath.value[pace.value]
      }
    }

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
      handleMove,
      obj,
      location
    };
  },
  emits: {
    'sending-start': null,
    'sending-complete' (payload) {
      console.log("====這裡可以做錯誤處理====")
      if(payload.duration && payload.response) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    SetUpDemo,
    LifecycleDemo,
    ScopedStylesDemo,
    ProvideInjectDemo
  },
  methods: {
    sendData() {
      this.$emit('sending-start')

      // send data to API

      this.$emit('sending-complete', {
        duration: 2
      })
    },
    handleLifeLikes() {
      this.currentLike += 1;
    },
    handleLifeReset() {
      this.currentLike = 0
    },
    handleCloseCountering() {
      this.isLifeClose = !this.isLifeClose
    }
  }
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