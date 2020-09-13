<template>
  <div class="review-component">
    <div class="header">
      <div class="title">Блок "Отзывы"</div>
    </div>
    <div class="form-component" v-if="formActive">
      <ReviewValidationForm :isEdited="isEdited" @save-form="saveForm" :card-data="cardData" />
    </div>
    <div class="cards-component">
      <ReviewCard @add-form="addForm" @edit-card="editCard" />
    </div>
  </div>
</template>

<script>
import lodash from "lodash";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewValidationForm from "../ReviewValidationForm/ReviewValidationForm";
import { mapActions, mapGetter } from "vuex";

export default {
  data() {
    return {
      formActive: false,
      isEdited: false,

      cardData: {},
    };
  },
  components: {
    ReviewCard,
    ReviewValidationForm,
  },
  methods: {
    ...mapActions("review", ["fetchAllReviews"]),

    addForm() {
      this.formActive = true;
    },
    saveForm($event) {
      this.formActive = false;
      this.isEdited = false;
      this.cardData = {};
    },
    editCard($event) {
      this.formActive = true;
      this.isEdited = true;
      this.cardData = $event;
    },
  },
  created() {
    this.token = localStorage.getItem("token");
    // this.categories = require("../../../data/categories.json");
    this.empty = false;
    // this.getUserId();
    setInterval(() => {
      this.$axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      this.$axios.post(`${this.$baseUrl}/refreshToken`).then((res) => {
        localStorage.setItem("token", res.data.token);
      });
    }, 50000);
    this.fetchAllReviews();
  },
};
</script>

<style lang="postcss" scoped>
.title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: bold;
  color: $text-color;
}
.reviews-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.form-component {
  margin-bottom: 28px;
}
</style>
