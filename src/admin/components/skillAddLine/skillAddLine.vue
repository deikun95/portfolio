<template>
  <div class="add-line-component">
    <app-input class="line__title" v-model="title" />
    <div class="percent-box">
      <app-input class="line__percent"  v-model="percent" />
      <span class="line__percent-label">%</span>
    </div>
    <round-btn type="round" />
  </div>
</template>

<script>
import roundBtn from "../button";
import appInput from "../input";

export default {
  data() {
    return {
      title: "Новый навык",
      percent: "",
    };
  },
  components: {
    appInput,
    roundBtn,
  },
};
</script>

<style lang="postcss">
.add-line-component {
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  margin-top: auto;
  padding-left: 25%
}
.line {
  &__title {
    width: 65%;
  }
  &__percent {
    &-label {
      position: absolute;
      top: 7px;
      right: 0;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
.percent-box {
  width: 15%;
  position: relative;
}
</style>
