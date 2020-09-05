<template>
  <div class="form-content">
    <card title="Редактирование отзыва">
      <div slot="content" class="review-form">
        <div class="form__upload">
          <div class="form__upload-img">
            <avatar size="15" src="src\images\content\user-upload.png" />
          </div>
          <appButton typeAttr="file" plain title="Добавить фото" />
        </div>
        <div class="form__main">
          <div class="form__title form__row">
            <app-input title="Имя автора" />
          </div>
          <div class="form__link form__row">
            <app-input title="Титуал автора" />
          </div>
          <div class="form__description form__row">
            <app-input title="Отзыв" fieldType="textarea" />
          </div>
          <div class="form__buttons">
            <appButton plain title="Отправить" />
            <appButton title="Сохранить" @click="saveForm(formData)" />
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from "../card";
import appInput from "../input";
import appButton from "../button";
import avatar from "../avatar/avatar";

export default {
  name: "WorkValidationForm",
  components: {
    card,
    appInput,
    appButton,
    avatar,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    saveForm(formData) {
      this.$emit("save-form", formData);
    },
  },
};
</script>

<style lang="postcss" scoped>
.review-form {
  height: 500px;
  display: flex;
  flex-wrap: nowrap;
}
.form {
  &__upload {
    width: 490px;
    /* height: 280px; */
    /* background-color: #dee4ed; */
    margin-right: 35px;
    /* border: 1px dashed #a1a1a1; */
    /* border-radius: 5px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    &-img{
      margin-bottom: 35px;
    }
    &-text {
      width: 222px;
      text-align: center;
      font-weight: 600;
      line-height: 20px;
      color: rgba(55, 62, 66, 0.6);
      margin-bottom: 40px;
    }
    /* &:hover {
      border: 1px dashed #0044ff;
    } */
  }
  &__main {
    width: 490px;
    height: 280px;
  }
  &__row {
    margin-bottom: 27px;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 27px;
  }
}
</style>