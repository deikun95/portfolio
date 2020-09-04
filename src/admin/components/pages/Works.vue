<template>
  <div class="works-component">
    <div class="header">
      <div class="title">Блок "Работы"</div>
    </div>
    <div class="form-component">
      <ValidationForm />
    </div>
    <div class="cards-component">
      <WorkCard />
    </div>
  </div>
</template>

<script>
import WorkCard from "../WorkCard/WorkCard";
import ValidationForm from "../ValidationForm/ValidationForm";

export default {
  components: {
    WorkCard,
    ValidationForm
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
.form-component{
  margin-bottom: 28px;
}
</style>
