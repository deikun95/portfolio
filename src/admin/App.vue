<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button type="iconed" title="Добавить группу" />
        </div>
        <ul class="skills">
          <li class="item item-card">
            <category class="item-category" />
          </li>
          <li class="item item-card">
            <category class="item-category" />
          </li>
          <li class="item item-card">
            <category class="item-category" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "./components/headline/headline";
import user from "./components/user";
import navigation from "./components/navigation";
import button from "./components/button";
import category from "./components/category";

export default {
  components: {
    user,
    headline,
    navigation,
    iconedButton: button,
    category,
  },
};
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
