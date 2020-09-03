<template>
  <card class="card-component" slim>
    <editLine slot="title" class="header-line" v-model="title" editModeByDefault />
    <template slot="content">
      <ul class="skills" slot="content">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill :skill="skill" />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

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
    skillAddLine,
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
.content {
  display: flex;
  font-direction: column;
}
.header-line{
  width: 100% !important;
}
</style>
