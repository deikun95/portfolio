<template>
  <card slim>
    <editLine slot="title" v-model="title" editModeByDefault />
    <ul class="skills" slot="content">
      <li class="item" v-for="skill in skills" :key="skill.id">
        <skill :skill="skill" />
      </li>
    </ul>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";

const skills = [
  {
    id: 0,
    title: "Html",
    percent: 80,
  },
  {
    id: 0,
    title: "Html",
    percent: 80,
  },
  {
    id: 0,
    title: "Html",
    percent: 80,
  },
];
export default {
  components: {
    card,
    editLine,
    skill,
  },
  data() {
    return {
      title: "Name",
      skills,
    };
  },
};
</script>

<style lang="postcss">
.skills {
  width: 100%;
}
</style>