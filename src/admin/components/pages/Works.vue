<template>
  <div class="works-component">
    <div class="header">
      <div class="title">Блок "Работы"</div>
    </div>
    <WorkCard />
  </div>
</template>

<script>
import WorkCard from "../WorkCard/WorkCard";
export default {
  components: {
    WorkCard,
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
</style>
