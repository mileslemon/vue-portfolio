<template>
  <div class="design">
    <div class="design-content">
      <sequential-entrance animation="slideFade">
        <design-preview
          class="design-item"
          v-for="design in designs"
          :key="design.id"
          :design-id="design.id"
          :design-title="design.title"
          :design-type="design.type"
          :design-slug="design.slug"
        ></design-preview>
      </sequential-entrance>
    </div>
  </div>
</template>

<script>
import DesignPreview from '../components/Design/DesignPreview';

import axios from 'axios';

export default {
  data() {
    return {
      route: this.$route.name,
      sideTextWidth: '',
      designs: null,
      errors: []
    };
  },
  components: {
    DesignPreview
  },
  created() {
    this.$emit('fetchRoute', this.routeTitle, this.route);

    axios
      .get('https://cdn.mileslemon.com/designs')
      .then(res => {
        this.designs = res.data;
        console.log(this.designs);
      })
      .catch(e => {
        console.log(e);
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
.design-content {
  @include flexbox;
  @include flex-direction(column);
  h1 {
    margin: 0 0 32px;
  }
  color: $off-black;
  padding: 32px 0;
}

.slideFade {
  animation: slideFadeIn 0.5s ease-out forwards;
}

@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
