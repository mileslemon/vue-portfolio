<template>
  <div>
    <router-link to="/blog" class="back-link">
      <transition name="back-link" appear>
        <div class="back-to-blog">Back to blog</div>
      </transition>
    </router-link>
    <div v-if="loaded" class="post-details">
      <h1>{{ post.title }}</h1>
      <p v-html="renderPostBody" class="blog-post-body"></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
  data() {
    return {
      routeTitle: '',
      postSlug: this.$route.params.slug,
      post: null,
      errors: [],
      loaded: false,
      postBody: '',
      postImages: []
    };
  },
  computed: {
    renderPostBody() {
      return marked(this.post.body);
    }
  },
  created() {
    // fetch post data [STRAPI]
    axios
      .get('https://cdn.mileslemon.com/posts?slug=' + this.postSlug)
      .then(res => {
        this.post = res.data[0];
        this.loaded = true;
        this.postBody = marked(res.data.body);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
.back-link {
  display: block;
  padding: 32px 0 0;
  text-decoration: none;
  @include transition(all 0.3s ease-out);
  &:hover {
    background: none !important;
    color: $off-white !important;
    opacity: 0.6;
    transform: translateX(-8px);
  }
}
.back-link-enter-active {
  opacity: 0;
  animation: backFadeIn 0.5s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes backFadeIn {
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.back-to-blog {
  color: $off-white;
  @include flexbox;
  &:before {
    content: '';
    background: url('../../assets/images/back-arrow-white.svg');
    background-size: cover;
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 16px;
  }
}

.post-details {
  color: white;
  width: 100%;
  padding: 32px 0;
  h1 {
    margin: 0 0 32px;
    font-family: UniversLight, sans-serif;
    font-size: 2.5rem;
  }
  .blog-post-body {
    font-size: 1rem;
    line-height: 1.3;
    a {
      color: white;
      font-family: UniversLight, sans-serif;
      @include transition(all 0.3s ease-in-out);
      &:hover {
        background: none;
        opacity: 0.6;
      }
    }
    ul {
      padding-left: 20px;
      li {
        margin-bottom: 8px;
      }
    }
  }
}

@include breakpoint($desk) {
  .back-link {
    padding: 45px 0;
    position: fixed;
    width: 120px;
  }

  .post-details {
    margin-left: 159px;
    padding: 32px;
    width: calc(100% - 495px);
    h1 {
      margin: 0 0 32px;
    }
  }
}
</style>
