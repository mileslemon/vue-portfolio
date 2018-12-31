<template>
  <div class="main-footer">
    <div class="footer-wrapper">
      <social-media></social-media>
      <p>&copy; {{ (new Date()).getFullYear() }} MILES LEMON</p>
    </div>
  </div>
</template>

<script>
import SocialMedia from './Misc/SocialMedia';

export default {
  components: {
    SocialMedia
  }
};
</script>

<style lang="scss" scoped>
.main-footer {
  border-top: 1px solid $grey;
  position: fixed;
  width: 100%;
  bottom: 0;
  @include transition(all 0.3s ease-in-out);
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  font-size: 0.75em;
  width: 100%;
  text-align: right;
  letter-spacing: 4px;
  padding: 32px 32px;

  @include flexbox;
  @include flex-direction(row);
  @include flex-wrap(nowrap);
  @include justify-content(space-between);

  p {
    margin: 0;
    padding-top: 7px;
  }
}
</style>
