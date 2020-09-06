<template>
  <div class="review-component">
    <div class="header">
      <div class="title">Блок "Отзывы"</div>
    </div>
    <div class="form-component" v-if="formActive">
      <ReviewValidationForm @save-form="saveForm" :card-data="cardData"/>
    </div>
    <div class="cards-component">
      <ReviewCard @add-form="addForm" @edit-card="editCard"/>
    </div>
  </div>
</template>

<script>
import lodash from "lodash";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewValidationForm from "../ReviewValidationForm/ReviewValidationForm";

export default {
  data() {
    return {
      formActive: false,
      cardData: {},
    };
  },
  components: {
    ReviewCard,
    ReviewValidationForm,
  },
  methods: {
    addForm() {
      this.formActive = true;
    },
    saveForm($event) {
      this.formActive = false;
      this.cardData = {};
    },
    editCard($event) {
      this.formActive = true;
      this.cardData = $event;
    },
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
