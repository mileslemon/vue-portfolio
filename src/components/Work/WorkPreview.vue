<template>
  <div class="work-item-preview">
    <router-link class="work-item-link" :to="'/work/' + workSlug">
      <h1>{{ workTitle }}</h1>
      <p>{{ workType }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    workId: {
      type: String
    },
    workTitle: {
      type: String
    },
    workType: {
      type: String
    },
    workSlug: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.work-item-preview {
  margin-bottom: 48px;
}
.work-item-link {
  color: $off-black;
  text-decoration: none;
  display: block;
  @include transition(all 0.3s ease-out);
  &:hover {
    transform: translateX(20px);
    color: $off-black;
    background: none;
    opacity: 0.8;
  }

  h1 {
    margin: 0 0 16px;
  }
  p {
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 4px;
  }
}
</style>
