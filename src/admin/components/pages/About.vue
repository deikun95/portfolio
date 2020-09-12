<template>
  <div>
    <div class="header">
      <div class="title">Блок "Обо мне"</div>
      <iconed-button @click="addCard" type="iconed" title="Добавить группу" />
    </div>
    <ul class="skills">
      <!-- <li class="item item-card" v-if="isShown">
        <category
          @remove="isShown = false"
          empty
        />
      </li>-->
      <li class="item item-card" v-for="card in getAllCards" :key="card.cardId">
        <!-- <category
          :id="item.id"
          :token="token"
          :empty="empty"
          class="item-category"
          :title="item.title"
          :skills="item.skills"
          @remove-skill="deleteSkill"
          @remove="deleteCard"
          @add-skill="addSkill"
          @edit-card="empty = !empty"
          @new-title="categoryTitle = $event"
          @get-user="userId = $event"
        /> -->
        <category
          class="item-category"
          :empty="empty"
          :card="card"
          :token="token"
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
import { mapGetters, mapActions } from "vuex";

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
      empty: true,
      token: null,
      categoryTitle: "",
      userId: null,
    };
  },
  methods: {
    ...mapActions("about", [
      "addCategoryItem",
      "addSkillItem",
      "deleteCardItem",
      "refreshCategoryTitle",
      "deleteSkillItem",
      "addNewCard",
      "getUserId",
      "fetchAllCategories"
    ]),
    deleteCard(categoryId) {
      this.deleteCardItem(categoryId);
    },
    addCard() {
      this.empty = true;
      const newCard = {
        cardId: Date.now(),
        category: {},
        skills: []
      }
      const category = {
        id: Date.now(),
        title: this.categoryTitle,
        skills: [],
      };
      this.addNewCard(newCard)
      
      this.addCategoryItem(category);
    },
    addSkill($event) {
      console.log($event);
      const skill = $event;
      this.addSkillItem($event);
    },
    deleteSkill($event) {
      this.deleteSkillItem($event);
    },
  },
  computed: {
    ...mapGetters("about", ["getAllCategories", "getAllCards"]),
  },
  created() {
    this.token = localStorage.getItem("token");
    // this.categories = require("../../../data/categories.json");
    this.getUserId()
    // this.fetchAllCategories()
    setInterval(() => {
      this.$axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      this.$axios.post(`${this.$baseUrl}/refreshToken`).then((res) => {localStorage.setItem('token', res.data.token)});
    }, 50000);
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
