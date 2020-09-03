<template>
  <div :class="['add-line-component', { blocked: blocked }]">
    <app-input class="line__title" v-model="title" />
    <div class="percent-box">
      <app-input class="line__percent" v-model="percent" />
      <span class="line__percent-label">%</span>
    </div>
    <round-btn type="round" />
  </div>
</template>

<script>
import roundBtn from "../button";
import appInput from "../input";

export default {
  props: {
    blocked: Boolean,
  },
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
  padding-left: 25%;
  position: relative;

  &.blocked {
    filter: grayscale(100%);
    pointer-events: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
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
