import category from "./category.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onRemoveSkill: action("onRemoveSkill"),
  onEditSkill: action("onEditSkill"),
};

export default {
  title: "category",
  components: { category },
};

const skills = [
  { id: 0, title: "Css", percent: 80 },
  { id: 1, title: "JS", percent: 99 },
];

export const defaultView = () => ({
  components: { category },
  data() {
    return {
      title: "Frontend",
      skills,
    };
  },
  template: `
    <category
    :title="title"
    :skills="skills"
    @remove="onRemove"
    @remove-skill="onRemoveSkill"
    @edit-skill="onEditSkill"

    />
  `,
  methods,
});

defaultView.story = {
  name: "Стандартный вид",
};
