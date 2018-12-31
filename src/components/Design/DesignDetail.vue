<template>
  <div class="design">
    <div v-if="design" class="design-item-detail">
      <div class="design-item-detail-text">
        <div class="design-item-text-detail-wrapper" :style="{ width: sideTextWidth }">
          <p class="design-type">{{ design.type }}</p>
          <h1>{{ design.title }}</h1>
          <p class="design-body" v-html="renderDesignBody"></p>
        </div>
      </div>
      <div class="design-item-detail-portfolio">
        <img v-for="image in design.images" :key="image.id" v-lazy="image.url">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
  data() {
    return {
      designSlug: this.$route.params.slug,
      design: null,
      errors: [],
      sideTextWidth: '33.33%'
    };
  },
  created() {
    // fetch post data [STRAPI]
    axios
      .get('https://cdn.mileslemon.com/designs?slug=' + this.designSlug)
      .then(res => {
        this.design = res.data[0];
        setTimeout(() => {
          this.getSideTextWidth();
        }, 1);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  mounted() {
    // run after everything is in-place
    window.addEventListener('resize', () => {
      this.getSideTextWidth();
    });
  },
  computed: {
    renderDesignBody() {
      return marked(this.design.body);
    }
  },
  methods: {
    getSideTextWidth() {
      if (this.$route.name === 'designItem') {
        const sideBar = document.querySelector('.design-item-detail-text');
        this.sideTextWidth = window.getComputedStyle(sideBar).width;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.design-item-detail-text {
  margin-bottom: 48px;
}

.design-type {
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 4px;
}

.design-item-detail-portfolio {
  z-index: 0;
  img {
    margin-bottom: 32px;
  }
  img[lazy='loading'] {
    animation: glow 2s infinite;
  }
  @keyframes glow {
    0%,
    100% {
      background: #fcfaf3;
    }
    50% {
      background: #f8f4df;
    }
  }
  img[lazy='loaded'] {
    opacity: 0;
    animation: slideFadeInY 0.3s linear both;
  }
  @keyframes slideFadeInY {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.design-item-detail {
  @include flexbox;
  @include flex-direction(column);
  h1 {
    margin: 0 0 32px;
  }
  color: $off-black;
  padding: 32px 0;
}

.design-body {
  line-height: 1.35;
}

@include breakpoint($tab) {
  .design-item-detail {
    position: relative;
    @include flex-direction(row);
    @include justify-content(space-between);
    .design-item-detail-text {
      display: block;
      width: calc(33.333% - 24px);
      .design-item-text-detail-wrapper {
        position: fixed;
      }
    }
    .design-item-detail-portfolio {
      width: calc(66.666% - 24px);
    }
  }
}
</style>
