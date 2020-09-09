<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
    <div class="page-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "../headline/headline";
import user from "../user";
import navigation from "../navigation";
import button from "../button";
import category from "../category";

export default {
  components: {
    user,
    headline,
    navigation,
    iconedButton: button,
    category,
  },
  data() {
    return {
      categories: [],
      isShown: false,
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.replace("/login");
    }
    this.categories = require("../../../data/categories.json");
  },
};
</script>

<style lang="postcss">
</style>
