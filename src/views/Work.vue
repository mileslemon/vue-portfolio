<template>
  <div class="work">
    <div class="work-content">
      <sequential-entrance animation="slideFade">
        <work-preview
          class="work-item"
          v-for="work in works"
          :key="work.id"
          :work-id="work.id"
          :work-title="work.title"
          :work-type="work.type"
          :work-slug="work.slug"
        ></work-preview>
      </sequential-entrance>
    </div>
  </div>
</template>

<script>
import WorkPreview from '../components/Work/WorkPreview';

import axios from 'axios';

export default {
  data() {
    return {
      route: this.$route.name,
      sideTextWidth: '',
      works: null,
      errors: []
    };
  },
  components: {
    WorkPreview
  },
  created() {
    this.$emit('fetchRoute', this.routeTitle, this.route);

    axios
      .get('https://cdn.mileslemon.com/designs')
      .then(res => {
        this.works = res.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
.work-content {
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
