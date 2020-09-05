<template>
  <div class="review-component">
    <div class="header">
      <div class="title">Блок "Отзывы"</div>
    </div>
    <div class="form-component" v-if="formActive">
      <ReviewValidationForm @save-form="saveForm" />
    </div>
    <div class="cards-component">
      <ReviewCard @add-form="addForm"/>
    </div>
  </div>
</template>

<script>
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewValidationForm from "../ReviewValidationForm/ReviewValidationForm";

export default {
  components: {
    ReviewCard,
    ReviewValidationForm,
  },
  data() {
    return {
      formActive: false,
    };
  },
  methods: {
    addForm() {
      this.formActive = true;
    },
    saveForm($event) {
      this.formActive = false;
    },
  }
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
