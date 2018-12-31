<template>
  <div class="blog">
    <sequential-entrance animation="slideFade">
      <blog-post-preview
        v-for="post in computedList"
        :key="post.id"
        :post-title="post.title"
        :post-date="post.date"
        :post-body="post.body"
        :post-id="post.id"
        :post-slug="post.slug"
      ></blog-post-preview>
    </sequential-entrance>
  </div>
</template>

<script>
import BlogPostPreview from '../components/Blog/BlogPostPreview';

import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: [],
      postImages: []
    };
  },
  props: {
    blogSearch: {
      type: String
    }
  },
  components: {
    BlogPostPreview
  },
  computed: {
    computedList() {
      const vm = this;
      return this.posts.filter(post => {
        return (
          post.title.toLowerCase().indexOf(vm.blogSearch.toLowerCase()) !== -1
        );
      });
    }
  },
  created() {
    // fetch posts api data [STRAPI]
    axios
      .get('https://cdn.mileslemon.com/posts?_sort=-date')
      .then(res => {
        this.posts = res.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
.blog-search {
  width: 100%;
  background: $black;
  border: none;
  font-size: 1.25em;
  color: $off-white;
  outline: none;

  position: absolute;
  top: 78px;
  padding: 16px 32px 12px;
  border-bottom: 1px solid $grey;
}

.blog {
  margin-top: 46px;
  border-right: 1px solid $grey;
  h1 {
    color: $off-white;
  }
}

.page-title {
  color: $off-white;
  @include abs-pos(0, 0, 0, 32px);
}

.slideFade {
  animation: slideFadeIn 0.3s ease-in-out forwards;
}

@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

img {
  width: 100%;
}

@include breakpoint($tab) {
  .blog-search {
    background: none;
    border-bottom: none;
    position: relative;
    padding: 5px 32px 0;
    top: unset;
  }

  .blog {
    margin-top: 0;
  }
}

@include breakpoint($desk) {
  .blog {
    border-right: none;
  }
}
</style>
