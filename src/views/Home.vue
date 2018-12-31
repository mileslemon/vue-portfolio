<template>
  <div class="home">
    <transition name="circle-anim" appear>
      <div class="c-line-wrapper">
        <div id="c-line" class="c-line" :style="{ width: circleWidth }"></div>
      </div>
    </transition>
    <div class="intro-text">
      <transition name="slide-fade" appear mode="out-in">
        <div>
          <h1 class="home-title">Miles Lemon. <br>Front-end web developer and designer based in London.</h1>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      circleWidth: 0
    };
  },
  mounted() {
    // run after everything is in-place
    this.getCircleWidth();
    window.addEventListener('resize', () => {
      this.getCircleWidth();
    });
  },
  methods: {
    getCircleWidth() {
      if (this.$route.name === 'home') {
        const circle = document.getElementById('c-line');
        this.circleWidth = window.getComputedStyle(circle).height;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.circle-anim-enter-active {
  animation: circleEnter 1s ease-in-out forwards;
}

@keyframes circleEnter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.c-line-wrapper {
  position: fixed;
  top: 0;
  height: 100%;
  padding: 78px 0 87px 0;
  .c-line {
    @include border-radius(50%);
    margin-left: -32px;
    height: 100%;
    border: 1px solid $grey;
    display: block;
  }
}

.intro-text {
  color: $off-white;
  padding: 80px 0 0 0;
  h1 {
    font-family: UniversLight, sans-serif;
    font-size: 3rem;
    letter-spacing: -1px;
    margin: 16px 0 0;
    line-height: 1.3;
  }
}

.slide-fade-enter-active {
  animation: slideFadeIn 0.5s ease-in-out forwards;
}


@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@include breakpoint($tab) {
  .intro-text {
    color: $off-white;
    h1 {
      font-size: 4rem;
    }
  }
}

@include breakpoint($desk) {
  .intro-text {
    width: calc(100% - 345px);
    padding: 150px 0 0 165px;
  }
  .c-line-wrapper {
    .c-line {
      margin-left: 0;
    }
  }
}
</style>
