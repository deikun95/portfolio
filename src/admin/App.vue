<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <h3>Content</h3>
    </headline>
  </div>
</template>

<script>
import avatar from "./components/avatar/avatar.vue";
import headline from "./components/headline/headline";
export default {
  components: {
    avatar,
    headline,
  },
};
</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
</style>