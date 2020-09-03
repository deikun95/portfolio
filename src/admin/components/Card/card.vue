<template>
  <div class="card-component card_plain" v-if="simple">
    <slot name="default"></slot>
  </div>
  <div class="card-component" v-else>
    <div class="header">
      <div class="text" v-text="title"></div>
      <slot name="title" v-if="!!title === false"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    simple: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.card-component {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%

  &.card_plain {
    padding: 0;
  }
}

.header {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  width: 100%;
  &__title{
    width: 100%;
  }
}

.content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
