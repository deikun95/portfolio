<template>
  <card class="card-component" slim>
    <!-- <editLine
      slot="title"
      class="header-line"
      v-model="categoryTitle"
      :editModeByDefault="empty"
      @approve="approveCategory"
      @remove="$emit('remove', id)"
      @edit-card="editCard"
    />-->
    <editLine
      slot="title"
      class="header-line"
      v-model="categoryTitle"
      :editModeByDefault="empty"
      @approve="approveCategory"
      @remove="deleteCategory"
      @edit-card="editCard"
    />
    <template slot="content">
      <div class="skills-content">
        <ul class="skills" slot="content">
          <li class="item" v-for="skill in card.skills" :key="skill.id">
            <skill :skill="skill" @remove="deleteSkill" @approve="editSkill" />
          </li>
        </ul>
      </div>
      <div class="bottom-line" v-if="isEdit">
        <skill-add-line @add-skill="addSkill" />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    card,
    editLine,
    skill,
    skillAddLine,
  },
  props: {
    card: Object,
    title: {
      type: String,
      default: "",
    },
    id: Number,
    token: String,
    empty: Boolean,
    // title: {
    //   type: String,
    //   default: "",
    // },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentToken: this.token,
      isEdit: this.empty,
      categoryTitle: this.title,
      userId: null,
      categoryId: null,
      isEdited: null,
    };
  },
  methods: {
    ...mapActions("about", [
      "refreshCategoryTitle",
      "addNewCategory",
      "editCategoryItem",
      "deleteCategoryItem",
      "addSkillItem",
      "editSkillItem",
      "deleteSkillItem",
    ]),
    editCard() {
      this.isEdit = !this.isEdit;
      this.$emit("edit-card");
    },
    approveCategory($event) {
      this.isEdit = !this.isEdit;

      if (this.isEdited) {
        this.editCategoryItem({ categoryTitle: $event, ...this.card });
      } else {
        this.addNewCategory({ title: $event, cardId: this.card.cardId });
      }
      this.isEdited = true;
    },
    deleteCategory() {
      this.deleteCategoryItem(this.card);
    },
    addSkill($event) {
      this.addSkillItem({ ...this.card, ...$event });
    },
    editSkill($event) {
      this.editSkillItem({ ...this.card, ...$event });
    },
    deleteSkill($event) {
      console.log($event, "deelte");
      this.deleteSkillItem({ ...this.card, id: $event });
    },
  },
  watch: {
    categoryTitle(val) {
      this.refreshCategoryTitle({ val, id: this.id });
    },
  },
  created() {},
};
</script>

<style lang="postcss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.skills {
  width: 100%;
  &-content {
    height: 163px;
  }
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
