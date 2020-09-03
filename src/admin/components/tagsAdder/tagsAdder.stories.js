import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: { tagsAdder },
};

export const defaultView = () => ({
  components: { tagsAdder },
  data() {
    return {
      tags: "One, two, three",
    };
  },
  template: `
    <tagsAdder v-model="tags"/>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
