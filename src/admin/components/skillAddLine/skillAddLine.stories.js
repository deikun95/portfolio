import skillAddLine from "./skillAddLine.vue";
import { action } from "@storybook/addon-actions";

// const methods = {
//   onApprove: action("onApprove"),
//   onRemove: action("onRemove")
// }

export default {
  title: "skillAddLine",
  component: skillAddLine,
};

export const defaultView = () => ({
  components: { skillAddLine },
  data() {
    return {
      title: "Название",
    };
  },
  template: `
    <skillAddLine/>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
