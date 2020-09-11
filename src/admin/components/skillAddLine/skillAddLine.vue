<template>
  <div :class="['add-line-component', { blocked: blocked }]">
    <app-input class="line__title" v-model="skill.title" />
    <div class="percent-box">
      <app-input class="line__percent" v-model="skill.percent" max="3" maxlength="3" type="number" />
      <span class="line__percent-label">%</span>
    </div>
    <round-btn type="round" @click="addSkill" />
  </div>
</template>

<script>
import roundBtn from "../button";
import appInput from "../input";

export default {
  props: {
    blocked: Boolean,
    token: String,
    id: Number,
  },
  data() {
    return {
      skill: { title: "", percent: "" },
    };
  },
  components: {
    appInput,
    roundBtn,
  },
  methods: {
    addSkill() {
      if (!Object.values(this.skill).includes("")) {
        this.$emit("add-skill", this.skill);
        this.skill = { title: "", percent: "" };
      }
    },
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
