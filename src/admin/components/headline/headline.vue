<template>
  <div class="headline-component">
    <div class="container headline-container">
      <slot />
      <div class="headline-title">{{title}}</div>
      <div class="buttons">
        <button type="button" class="btn" @click="handleExit">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    default: "Панель администрирования",
  },
  methods: {
    handleExit() {
      const token = localStorage.getItem("token");
      this.$axios.post(`${this.$baseUrl}/logout`, token);
      localStorage.removeItem("token");
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="postcss" scoped src="./headline.pcss">
</style>