<template>
  <div id="app" :class="{ lightMode: isLightMode, darkMode: isDarkMode }" @click="hideNav">
    <transition name="preloader">
      <pre-loader id="preloader" v-if="loading"></pre-loader>
    </transition>

    <div class="main-header">
      <div class="header-wrapper">
        <router-link to="/" class="branding">
          <p>MILES LEMON</p>
        </router-link>

        <transition name="slide" mode="out-in" appear>
          <input v-if="$route.name === 'blog'" type="text" name="blog-search" class="blog-search" placeholder="Search" v-model="blogSearch">
        </transition>
        
        <div class="nav-show" @click="closeNav = !closeNav">
          <svg viewBox="0 0 62 60" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62 3.5H0V0.5H62V3.5ZM62 59.5H0V56.5H62V59.5ZM0 31.5H62V28.5H0V31.5Z"/>
          </svg>
        </div>

        <div class="nav" :class="{ 'hide-nav': closeNav }">
          <div class="nav-wrapper">
            <router-link active-class="active" to="/about">about</router-link>
            <router-link active-class="active" to="/work">work</router-link>
            <router-link active-class="active" to="/blog">blog</router-link>
          </div>
          <div class="nav-close" @click="closeNav = true">
            <div>
              <svg class="nav-close-btn" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8787 33L0.939331 3.06065L3.06065 0.939331L33 30.8787L62.9393 0.939331L65.0607 3.06065L35.1213 33L65.0607 62.9393L62.9393 65.0607L33 35.1213L3.06065 65.0607L0.939331 62.9393L30.8787 33Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="line-wrapper">
      <div class="v-line line-1"></div>
      <div class="v-line line-2"></div>
    </div>

    <div class="main-content" :class="{'main-content-padding': $route.name === 'blog'}">
      <transition name="router-anim" mode="out-in" appear>
        <router-view 
          class="content"  
          :blog-search="blogSearch"
        />
      </transition>
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
import PreLoader from './components/Misc/PreLoader';
import MainFooter from './components/MainFooter';

export default {
  data() {
    return {
      loading: true,
      isLightMode: false,
      isDarkMode: true,
      closeNav: true,
      blogSearch: ''
    };
  },
  components: {
    PreLoader,
    MainFooter
  },
  methods: {
    checkNav() {
      const windowWidth = window.matchMedia('(min-width: 560px)');
      if (windowWidth.matches && this.closeNav === true) {
        this.closeNav = false;
      } else if (!windowWidth.matches && this.closeNav === false) {
        this.closeNav = true;
      }
    },
    hideNav(e) {
      const windowWidth = window.matchMedia('(max-width: 560px)');
      const showNav = document.querySelector('.nav-show');
      if (
        this.closeNav === false &&
        e.target !== showNav &&
        windowWidth.matches
      ) {
        this.closeNav = true;
      }
    }
  },
  watch: {
    $route(to, from) {
      // close mobile nav menu when switching routes
      const windowWidth = window.matchMedia('(max-width: 560px)');
      if (windowWidth.matches && this.closeNav === false) {
        this.closeNav = true;
      }

      // change colour theme when going to and from the work section
      if (to.name === 'work' || to.name === 'workItem') {
        this.isLightMode = true;
        this.isDarkMode = false;
      } else if (from.name === 'work' || from.name === 'workItem') {
        this.isLightMode = false;
        this.isDarkMode = true;
      }
    }
  },
  created() {
    window.addEventListener('load', () => {
      this.loading = false;
    });
  },
  mounted() {
    // Prevent clicking nav from closing the nav
    const nav = document.querySelector('.nav');
    nav.addEventListener('click', e => {
      e.stopPropagation();
    });

    // show the nav if it is hidden when screen is larger than mobile
    this.checkNav();
    window.addEventListener('resize', () => {
      this.checkNav();
    });
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Univers;
  font-weight: normal;
  src: url('assets/fonts/Univers.otf') format('opentype');
}
@font-face {
  font-family: UniversLight;
  font-weight: lighter;
  src: url('assets/fonts/Univers-Light.otf') format('opentype');
}
@font-face {
  font-family: UniversBold;
  font-weight: bold;
  src: url('assets/fonts/Univers-Bold.otf') format('opentype');
}

* {
  @include box-sizing(border-box);
}

.preloader-leave-active {
  animation: fadeLoader 0.3s ease-in-out forwards;
}

@keyframes fadeLoader {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

body {
  font-family: UniversLight, Helvetica, sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}

img {
  width: 100%;
  max-width: 100%;
}

p {
  margin: 0;
}

pre {
  color: $off-black;
  background: $off-white;
  padding: 24px;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  code {
    font-size: 0.75em;
  }
}

#app {
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  position: relative;
  padding-bottom: 87px;
  @include transition(all 0.5s ease-in-out);
  &:after {
    content: '';
    animation: 0.5s infinite noise;
    background: url('./assets/images/background_noise.png');
    background-size: 40%;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
}

#app.darkMode {
  background: rgba(20, 20, 20, 1);
  .main-header,
  .main-footer,
  .nav {
    background: rgba(20, 20, 20, 1);
  }
}
#app.lightMode {
  background: $off-white;
  .main-header,
  .main-footer,
  .nav {
    background: $off-white;
  }
}

@keyframes noise {
  0%,
  100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  20% {
    background-position: -15% 5%;
  }
  30% {
    background-position: 7% -25%;
  }
  40% {
    background-position: 20% 25%;
  }
  50% {
    background-position: -25% 10%;
  }
  60% {
    background-position: 15% 5%;
  }
  70% {
    background-position: 0% 15%;
  }
  80% {
    background-position: 25% 35%;
  }
  90% {
    background-position: -10% 10%;
  }
}

.branding {
  text-decoration: none;
  padding: 32px;
  position: relative;
  p {
    margin: 0;
    font-family: UniversLight, sans-serif;
    letter-spacing: 4px;
    font-size: 0.75em;
    white-space: nowrap;
  }
  &:before {
    content: '';
    background: $grey;
    bottom: 50%;
    display: block;
    height: 1px;
    left: 0px;
    position: absolute;
    width: 100%;

    @include transform-origin(left, top);
    @include scale(0, 1);
    -webkit-transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
    transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
  }
  &:hover:before {
    @include transform-origin(right, top);
    @include scale(1, 1);
  }
}

.main-header {
  border-bottom: 1px solid $grey;
  width: 100%;
  position: fixed;
  z-index: 1;
  @include transition(all 0.3s ease-in-out);
}

.slide-enter-active {
  animation: searchSlideIn 0.5s ease-in-out forwards;
}

.slide-leave-active {
  animation: searchSlideOut 0.5s ease-in-out forwards;
}

@keyframes searchSlideIn {
  from {
    transform: translateX(-16px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes searchSlideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-16px);
    opacity: 0;
  }
}

.header-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  @include flexbox;
  @include flex-direction(row);
  @include flex-wrap(wrap);

  .nav-show {
    padding: 30px 32px;
    margin-left: auto;
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    svg {
      width: 16px;
      pointer-events: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .nav {
    border-left: 1px solid $grey;
    height: calc(100vh - 165px);
    position: absolute;
    right: 0;
    top: 78px;
    width: 300px;
    @include flexbox;
    @include flex-direction(row);
    @include flex-wrap(nowrap);
    @include align-content(start);
    @include transition(all 0.3s ease-in-out);
    &.hide-nav {
      right: -300px;
    }
    .nav-wrapper {
      width: 100%;
    }
    a {
      width: 100%;
      display: block;
      font-size: 0.75em;
      letter-spacing: 4px;
      overflow: hidden;
      padding: 32px 34.5px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      @include transition(all 0.2s ease-in-out);
      &.active {
        color: #999;
        &:hover {
          background: none;
          animation: none;
          color: #999;
          cursor: default;
        }
      }
    }

    .nav-close {
      width: 100px;
      border-left: 1px solid $grey;
      @include flexbox;
      @include justify-content(center);
      @include align-items(center);
      @include transition(all 0.3s ease-in-out);
      .nav-close-btn {
        width: 16px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.line-wrapper {
  display: block;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  z-index: 101;
  pointer-events: none;
  @include abs-pos(0, 0, 0, 0);

  .v-line {
    width: 1px;
    background-color: $grey;
    @include abs-pos(0, auto, 0, auto);
    @include transition(all 0.6s ease-in-out);
  }

  .line-1 {
    left: 0;
  }

  .line-2 {
    right: 0;
  }
  .c-line-wrapper {
    position: fixed;
    top: 0;
    height: 100%;
    padding: 78px 0 87px 0;
    .c-line {
      @include border-radius(50%);
      height: 100%;
      border: 1px solid $grey;
      display: block;
    }
  }
}

@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFadeOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-16px);
  }
}

.router-anim-enter-active {
  animation: fadeIn 0.5s ease-in-out forwards;
  opacity: 0;
}
.router-anim-leave-active {
  animation: fadeOut 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.main-content {
  max-width: 1400px;
  position: relative;
  width: 100%;
  margin: 78px auto 0 auto;
  padding: 0 32px;
  .content {
    width: 100%;
    height: 100%;
  }
}

.main-content-padding {
  padding: 0;
}

.blog-post-body {
  p {
    margin-bottom: 24px;
  }
}

.lightMode {
  color: $off-black;
  a {
    color: $off-black;
    &.active {
      background: $off-white;
    }
    &:hover {
      color: $off-white;
      background: $off-black;
    }
  }
  .nav-show svg {
    fill: $off-black;
  }
  .nav-close {
    .nav-close-btn {
      fill: $off-black;
    }
    &:hover {
      background: $off-black;
      .nav-close-btn {
        fill: $off-white;
      }
    }
  }
  .branding:hover {
    color: $off-black;
    background: none;
  }
  .social-media-icon svg {
    fill: $off-black;
  }
  .line-wrapper {
    .v-line {
      &.line-1 {
        left: 0;
      }
      &.line-2 {
        right: 0;
      }
    }
  }
}

.darkMode {
  color: $off-white;
  a {
    color: $off-white;
    &.active {
      background: rgba(20, 20, 20, 1);
    }
    &:hover {
      color: $off-black;
      background: $off-white;
    }
  }
  .nav-show svg {
    fill: $off-white;
  }
  .nav-close {
    .nav-close-btn {
      fill: $off-white;
    }
    &:hover {
      background: $off-white;
      .nav-close-btn {
        fill: $off-black;
      }
    }
  }
  .branding:hover {
    color: $off-white;
    background: none;
  }
  .social-media-icon svg {
    fill: $off-white;
  }
}

@include breakpoint(560px) {
  .header-wrapper {
    @include flex-wrap(nowrap);

    .nav-show {
      display: none;
    }

    .nav {
      background: none;
      border-left: none;
      height: auto;
      margin-left: auto;
      position: relative;
      top: 0;
      width: unset;
      .nav-wrapper {
        @include flexbox;
        @include flex-wrap(nowrap);
        a {
          width: unset;
        }
      }
      .nav-close {
        display: none;
      }
    }
  }
}

@include breakpoint($desk) {
  .main-content-padding {
    padding: 0 32px;
  }
  .line-wrapper {
    .line-1 {
      left: 190px;
    }
    .line-2 {
      right: 367px;
    }
  }
}
</style>
