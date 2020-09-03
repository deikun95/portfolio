import navigation from "./navigation.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "navigation",
  components: { navigation },
  decorators: [withKnobs],
};

export const defaultView = () => ({
  components: { navigation },
  template: `
    <navigation/>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
