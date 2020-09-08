<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {};
</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  margin-bottom: 60px;
}

.page-content {
  flex: 1;
  padding: 60px 0 20px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.705),
      rgba(110, 110, 110, 0.6)
    ),
    url("../images/bg/hero.jpg") center center / cover no-repeat;
}
.title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: bold;
  color: $text-color;
}
.skills {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 500px;
  &-card {
    margin: 0 30px 30px 0;
  }
  &-category {
    width: 100%;
  }
}
</style>
