<template>
  <card class="card-component" slim>
    <editLine
      slot="title"
      class="header-line"
      v-model="categoryTitle"
      :editModeByDefault="empty"
      @approve="approveCategory"
      @remove="$emit('remove', id)"
      @edit-card="editCard"
    />
    <template slot="content">
      <div class="skills-content">
        <ul class="skills" slot="content">
          <li class="item" v-for="skill in skills" :key="skill.id">
            <skill
              :id="id"
              :skill="skill"
              @remove="$emit('remove-skill', $event)"
              @approve="$emit('edit-skill', $event)"
            />
          </li>
        </ul>
      </div>
      <div class="bottom-line" v-if="isEdit">
        <skill-add-line @add-skill="$emit('add-skill', {...$event, id})" />
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
    id: Number,
    token: String,
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
      isEdit: this.empty,
      categoryTitle: this.title,
      currentToken: this.token,
      userId: null,
      categoryId: null,
    };
  },
  methods: {
    ...mapActions("about", ["refreshCategoryTitle"]),
    editCard() {
      this.isEdit = !this.isEdit;
      this.$emit("edit-card");
      console.log("dassd");
    },
    approveCategory($event) {
      this.isEdit = !this.isEdit;

      this.$axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${this.currentToken}`;
      this.$axios
        .post(`${this.$baseUrl}/categories`, { title: $event })
        .then((res) => {
          this.userId = res.data.user_id;
          this.categoryId = res.data.id;
        });
    },
  },
  watch: {
    categoryTitle(val) {
      this.refreshCategoryTitle({ val, id: this.id });
    },
  },
  created() {
    this.skills;
  },
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
