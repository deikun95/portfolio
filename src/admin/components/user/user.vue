<template>
  <div class="user-component">
    <avatar size="2.7" src="https://picsum.photos/300/300" />
    <div class="username">Олег Кендигелян</div>
  </div>
</template>

<script>
import avatar from "../avatar";
export default {
  components: {
    avatar,
  },
};
</script>

<style lang="postcss">
.user-component {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  align-items: center;
}
.username {
  margin-left: 10px;
}
</style>