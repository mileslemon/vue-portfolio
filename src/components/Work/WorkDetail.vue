<template>
  <div class="work">
    <div v-if="work" class="work-item-detail">
      <div class="work-item-detail-text">
        <div class="work-item-text-detail-wrapper" :style="{ width: sideTextWidth }">
          <p class="work-type">{{ work.type }}</p>
          <h1>{{ work.title }}</h1>
          <p class="work-body" v-html="renderWorkBody"></p>
        </div>
      </div>
      <div class="work-item-detail-portfolio">
        <img v-for="image in work.images" :key="image.id" v-lazy="image.url">
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
      workSlug: this.$route.params.slug,
      work: null,
      errors: [],
      sideTextWidth: '33.33%'
    };
  },
  created() {
    // fetch post data [STRAPI]
    axios
      .get('https://cdn.mileslemon.com/designs?slug=' + this.workSlug)
      .then(res => {
        this.work = res.data[0];
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
    renderWorkBody() {
      return marked(this.work.body);
    }
  },
  methods: {
    getSideTextWidth() {
      if (this.$route.name === 'workItem') {
        const sideBar = document.querySelector('.work-item-detail-text');
        this.sideTextWidth = window.getComputedStyle(sideBar).width;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.work-item-detail-text {
  margin-bottom: 48px;
}

.work-type {
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 4px;
}

.work-item-detail-portfolio {
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

.work-item-detail {
  @include flexbox;
  @include flex-direction(column);
  h1 {
    margin: 0 0 32px;
  }
  color: $off-black;
  padding: 32px 0;
}

.work-body {
  line-height: 1.35;
}

@include breakpoint($tab) {
  .work-item-detail {
    position: relative;
    @include flex-direction(row);
    @include justify-content(space-between);
    .work-item-detail-text {
      display: block;
      width: calc(33.333% - 24px);
      .work-item-text-detail-wrapper {
        position: fixed;
      }
    }
    .work-item-detail-portfolio {
      width: calc(66.666% - 24px);
    }
  }
}
</style>
