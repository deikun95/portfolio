<template>
  <div class="works-component">
    <div class="header">
      <div class="title">Блок "Работы"</div>
    </div>
    <div class="form-component" v-if="formActive">
      <ValidationForm @save-form="saveForm" />
    </div>
    <div class="cards-component">
      <WorkCard @add-form="addForm" />
    </div>
  </div>
</template>

<script>
import WorkCard from "../WorkCard/WorkCard";
import ValidationForm from "../ValidationForm/ValidationForm";

export default {
  data() {
    return {
      formActive: false,
    };
  },
  components: {
    WorkCard,
    ValidationForm,
  },
  methods: {
    addForm() {
      this.formActive = true;
    },
    saveForm($event) {
      this.formActive = false;
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
