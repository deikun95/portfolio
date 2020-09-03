import category from "./category.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "category",
  components: { category },
  decorators: [withKnobs],
};

export const defaultView = () => ({
  components: { category },
  template: `
    <category/>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
