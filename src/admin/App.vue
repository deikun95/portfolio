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
      </div>
    </div>
  </div>
</template>

<script>
import headline from "./components/headline/headline";
import user from "./components/user";
import navigation from "./components/navigation";
import button from "./components/button";

export default {
  components: {
    user,
    headline,
    navigation,
    iconedButton: button,
  },
};
</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.app-container {
  height: 100vh;
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
  background: linear-gradient(rgba(255, 255, 255, 0.705), rgba(110, 110, 110, 0.6)), url("../images/bg/hero.jpg") center center / cover no-repeat;
}
.title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: bold;
  color: $text-color;
}
</style>