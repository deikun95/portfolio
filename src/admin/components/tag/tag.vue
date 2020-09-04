<template>
  <div>
    <div :class="[{clear : !interactive}, 'tag']">
      {{title}}
      <button
      v-on="$listeners"
       v-if="interactive" type="button" class="tag-btn">x</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    interactive: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.tag {
  white-space: nowrap;
  padding: 6px 30px 6px 20px;
  border-radius: 50px;
  background: rgb(195, 205, 212);
  color: rgb(40, 51, 64);
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  position: relative;
  &-btn {
    outline: none;
    position: absolute;
    right: 3px;
    top: 3px;
    font-size: 17px;
    display: block;
    /* width: 50px; */
  }
}
.clear {
  padding: 6px 20px;
}
</style>