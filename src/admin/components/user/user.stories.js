import user from "./user.vue";

export default {
  title: "user",
  component: user,
};

export const defaultView = () => ({
  components: { user },
  template: `
    <user>
    </user>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
