<template>
  <div>
    <div class="header">
      <div class="title">Блок "Обо мне"</div>
      <iconed-button
        v-if="!isShown"
        @click="isShown = true"
        type="iconed"
        title="Добавить группу"
      />
    </div>
    <ul class="skills">
      <li class="item item-card" v-if="isShown">
        <category @remove="isShown = false" empty />
      </li>
      <li
        class="item item-card"
        v-for="category in categories"
        :key="category.id"
      >
        <category
          class="item-category"
          :title="category.category"
          :skills="category.skills"
        />
      </li>
    </ul>
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
    this.categories = require("../../../data/categories.json");
  },
};
</script>

<style lang="postcss" scoped>
.header {
  display: flex;
  margin-bottom: 60px;
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
