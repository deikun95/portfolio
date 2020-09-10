<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editMode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon symbol="pencil" @click="editCard" grayscale></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          placeholder="Название новой группы"
          :value="value"
          :errorText="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove')"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    editModeByDefault: Boolean,
    blocked: Boolean,
  },
  data() {
    return {
      editMode: this.editModeByDefault,
      title: this.value,
    };
  },
  methods: {
    editCard() {
      this.editMode = true;
      this.$emit("edit-card");
    },
    onApprove() {
      if (this.value !== "") {
        console.log(11)
        if (this.title.trim() === this.value.trim()) {
          this.editMode = false;
        } else {
          this.editMode = false;
          this.$emit("approve", this.value);
        }
      }
    },
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input"),
  },
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>