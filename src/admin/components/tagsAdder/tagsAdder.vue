<template>
  <div class="tags-adder-component">
    <app-input @input="$emit('change', tags)" title="Добавление тега" v-model="tags" />
    <ul class="tags">
      <li class="tag" v-if="tag.trim()" v-for="(tag, index) in tagsArray" :key="`${tag}${index}`">
        <tag @click="removeTag(tag)" interactive :title="tag" />
      </li>
    </ul>
  </div>
</template>

<script>
import appInput from "../input";
import tag from "../tag";
export default {
  components: {
    appInput,
    tag,
  },
  props: {
    tags: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "tags",
    event: "change",
  },
  data() {
    return {
      // currentTags: this.tags,
    };
  },
  computed: {
    tagsArray() {
      return this.tags.trim().split(",");
    },
  },
  methods: {
    removeTag(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);

      if (tagNdx < 0) return;
      tags.splice(tagNdx, 1);
      this.tags = tags.join(", ");

      this.$emit("change", this.tags);
    },
  },
};
</script>

<style lang="postcss" scoped>
.tags {
  display: flex;
  margin-top: 20px;
}

.tag {
  margin-right: 10px;
}
</style>