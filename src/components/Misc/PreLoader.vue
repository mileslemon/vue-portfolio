<template>
<div class="preloader-wrapper">
  <transition name=fade-preloader appear>
    <div class="preloader">
      <div class="spinner"></div>
    </div>
  </transition>
</div>
</template>

<style lang="scss" scoped>
.fade-preloader-enter-active {
  opacity: 0;
  animation: fadeIn 0.2s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.preloader-wrapper {
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
}

.preloader {
  width: 100%;
  height: 100%;
  @include flexbox;
  @include justify-content(center);
  @include align-items(center);

  .spinner {
    width: 200px;
    height: 2px;
    background: linear-gradient(to right, $off-black, $off-black);
    background-color: #ccc;
    background-size: 20%;
    background-repeat: repeat-y;
    background-position: -25% 0;
    animation: scroll 1.2s ease-in-out infinite;
  }
}

@keyframes scroll {
  50% {
    background-size: 80%;
  }
  100% {
    background-position: 125% 0;
  }
}

@keyframes loading {
  from {
    left: -50px;
    width: 30%;
  }
  50% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  to {
    left: 100%;
  }
}
</style>
