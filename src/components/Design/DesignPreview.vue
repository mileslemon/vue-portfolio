<template>
  <div class="design-item-preview">
    <router-link class="design-item-link" :to="'/design/' + designSlug">
      <h1>{{ designTitle }}</h1>
      <p>READ MORE</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    designId: {
      type: String
    },
    designTitle: {
      type: String
    },
    designType: {
      type: String
    },
    designSlug: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.design-item-preview {
  margin-bottom: 48px;
}
.design-item-link {
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
