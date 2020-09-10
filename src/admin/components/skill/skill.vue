<template>
  <div class="skill-component" v-if="editmode === false">
    <div class="title">{{skill.title}}</div>
    <div class="percent">{{skill.percent}}</div>
    <div class="buttons">
      <icon symbol="pencil" class="btn" @click="editmode = true" grayscale />
      <icon symbol="trash" class="btn" @click="$emit('remove', skill.skill_id)" grayscale />
    </div>
  </div>
  <div class="skill-component" v-else>
    <div class="title">
      <app-input v-model="currentSkill.title" noSidePaddings />
    </div>
    <div class="percent">
      <app-input v-model="currentSkill.percent" type="number" min="0" max="3" maxlength="3" />
    </div>
    <div class="buttons">
      <icon symbol="tick" class="btn" @click="$emit('approve', {...currentSkill, id} )" />
      <icon symbol="cross" class="btn" @click="editmode = false" />
    </div>
  </div>
</template>

<script>
import input from "../input";
import icon from "../icon";

export default {
  props: {
    id: Number,
    skill: {
      type: Object,
      default: () => ({}),
      requied: true,
    },
  },
  data() {
    return {
      editmode: false,
      currentSkill: {
        title: "",
        percent: "",
      },
    };
  },
  components: {
    input,
    appInput: input,
    icon,
  },
  created() {
    this.currentSkill = { ...this.skill };
  },
};
</script>

<style lang="postcss">
.skill-component {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
}
.skill-component .buttons {
  position: absolute;
  display: flex;
  right: 0;
}
.btn:first-child {
  margin-right: 20px;
}
.percent {
  position: absolute;
  right: calc(4.125rem+20px);
  font-weight: 600;
}
</style>