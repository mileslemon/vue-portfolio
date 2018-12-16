<template>
  <div id="app">
    <div class="main-header">
      <router-link to="/" class="branding">
        <site-branding></site-branding>
      </router-link>
      <div class="nav">
        <router-link to="/about">about</router-link>
        <router-link to="/cv">cv</router-link>
        <router-link to="/design">design</router-link>
        <router-link to="/blog">blog</router-link>
      </div>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SiteBranding from "./components/misc/SiteBranding";
import Footer from "./components/Footer";

export default {
  components: {
    SiteBranding,
    Footer
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Univers;
  font-weight: normal;
  src: url("assets/fonts/Univers.otf") format("opentype");
}

@font-face {
  font-family: UniversLight;
  font-weight: lighter;
  src: url("assets/fonts/Univers-Light.otf") format("opentype");
}

@font-face {
  font-family: UniversBold;
  font-weight: bold;
  src: url("assets/fonts/Univers-Bold.otf") format("opentype");
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: UniversLight, sans-serif;
  background: rgba(20, 20, 20, 1);
  overflow-y: hidden;
  &:after {
    content: "";
    animation: 0.5s infinite noise;
    background: url("./assets/images/background_noise.png");
    background-size: 40%;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }
}

@keyframes noise {
  0%, 100% { background-position: 0 0; }
  10% { background-position: -5% -10%; }
  20% { background-position: -15% 5%; }
  30% { background-position: 7% -25%; }
  40% { background-position: 20% 25%; }
  50% { background-position: -25% 10%; }
  60% { background-position: 15% 5%; }
  70% { background-position: 0% 15%; }
  80% { background-position: 25% 35%; }
  90% { background-position: -10% 10%; }
}

.branding {
  text-decoration: none;
}

h1 {
  font-family: UniversBold, sans-serif;
  color: $off-white;
}

.main-header {
  color: $off-white;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 0;
  @include flexbox;
  @include flex-direction(row);
  .nav {
    margin-left: auto;
    @include flexbox;
    @include flex-direction(row);
    @include flex-wrap(nowrap);
    a {
      text-decoration: none;
      color: $off-white;
      margin-right: 24px;
      display: block;
      text-transform: uppercase;
      font-size: 0.75em;
      letter-spacing: 4px;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: #000;
      }
      &:before {
        content: '';
        position: absolute;
        left: 0px;
        bottom:0px;
        z-index:-1;
        width: 100%;
        height: 100%;
        background: transparent;
        box-shadow: inset 0px 0px 0px $off-white;
        display: block;
        -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
        transition: all 0.4s cubic-bezier(.5, .24, 0, 1)
      }
      &:hover:before {
        box-shadow: inset 300px 0px 0px $off-white;
        -webkit-transform-origin: right top;
        -ms-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        transform: scale(1, 1)
      }
    }
  }
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
