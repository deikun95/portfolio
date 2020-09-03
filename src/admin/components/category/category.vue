<template>
  <card class="card-component" slim>
    <editLine
      slot="title"
      class="header-line"
      v-model="categoryTitle"
      :editModeByDefault="empty"
      @remove="$emit('remove', $event)"
    />
    <template slot="content">
      <ul class="skills" slot="content" v-if="empty === false">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill
            :skill="skill"
            @remove="$emit('remove-skill', $event)"
            @approve="$emit('edit-skill', $event)"
          />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line :blocked="empty" />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
  components: {
    card,
    editLine,
    skill,
    skillAddLine,
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: "",
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categoryTitle: this.title,
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
  flex-direction: column;
}
.header-line {
  width: 100% !important;
}
.bottom-line {
  /* padding-top: 163px */
}
</style>
