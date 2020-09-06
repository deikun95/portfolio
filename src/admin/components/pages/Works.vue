<template>
  <div class="works-component">
    <div class="header">
      <div class="title">Блок "Работы"</div>
    </div>
    <div class="form-component" v-if="formActive">
      <WorkValidationForm @save-form="saveForm" :card-data="cardData" />
    </div>
    <div class="cards-component">
      <WorkCard @add-form="addForm" @edit-card="editCard" />
    </div>
  </div>
</template>

<script>
import lodash from "lodash";
import WorkCard from "../WorkCard/WorkCard";
import WorkValidationForm from "../WorkValidationForm/WorkValidationForm";

export default {
  data() {
    return {
      formActive: false,
      cardData: {},
    };
  },
  components: {
    WorkCard,
    WorkValidationForm,
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
.works-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.form-component {
  margin-bottom: 28px;
}
</style>
