<template>
  <div class="blog-post">
    <div class="post-date">
      <p class="post-day-month">{{ getPostDay }} {{ getPostMonth }}</p>
      <p class="post-year">{{ getPostYear }}</p>
    </div>
    <router-link v-if="postSlug" class="post-link" :to="'/blog/' + postSlug">
      <div class="post-content">
        <h2>{{ postTitle }}</h2>
        <span class="read-more">READ MORE</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BlogPost',
  data() {
    return {
      formattedDate: this.postDate.match(/\d+-\d+-\d+/)[0]
    };
  },
  props: {
    postTitle: {
      type: String
    },
    postDate: {
      type: String
    },
    postBody: {
      type: String
    },
    postId: {
      type: String
    },
    postSlug: {
      type: String
    }
  },
  computed: {
    getPostDay() {
      return this.formattedDate.match(/\d+/g)[2];
    },
    getPostMonth() {
      let monthNum = this.formattedDate.match(/\d+/g)[1];
      return moment.monthsShort(monthNum - 1);
    },
    getPostYear() {
      return this.formattedDate.match(/\d+/g)[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-post {
  color: $off-white;
  border-left: 1px solid $grey;
  @include flexbox;
  @include flex-direction(row);
  @include flex-wrap(wrap);
  &:last-child {
    .post-content {
      border-bottom: none;
    }
  }
}

.post-date {
  min-width: 75px;
  padding: 34px 32px 0 32px;
  color: $off-white;
  text-align: left;
  @include align-self(flex-start);
  p {
    margin: 0;
    display: inline-block;
  }
  .post-day-month {
    text-transform: uppercase;
    font-size: 0.75em;
  }
  .post-year {
    padding-left: 6px;
  }
}

.post-summary {
  margin: 0 0 24px;
}

.post-link {
  color: white;
  text-decoration: none;
  width: 100%;
  @include transition(all 0.2s ease-in-out);
  &:hover {
    background: $off-white;
    color: $off-black;
    .post-content {
      color: $off-black;
      h2 {
        color: $off-black;
      }
    }
  }
}

.post-content {
  color: white;
  padding: 8px 32px 32px;
  border-bottom: 1px solid $grey;
  h2 {
    color: $off-white;
    font-size: 1.5em;
    margin: 0 0 16px;
  }
  img {
    max-width: 100%;
  }
}

.read-more {
  font-family: UniversLight, Helvetica, sans-serif;
  font-weight: lighter;
  font-size: 0.75em;
}

@include breakpoint($tab) {

  .blog-post {
    border-left: none;
    @include flex-wrap(nowrap);
  }

  .post-date {
    padding: 34px 32px 0 0;
    text-align: right;
    min-width: 159px;
    p {
      display: block;
    }
    .post-year {
      padding-left: 0;
    }
  }

  .post-content {
    border-left: 1px solid $grey;
    padding: 32px;
    h2 {
      font-size: 2.2em;
    }
  }
}

@include breakpoint($desk) {
  .post-link {
    width: calc(100% - 495px);
  }

  .post-content {
    border-left: none;
  }
}
</style>
