<template>
  <div class="form-content">
    <card title="Редактирование работы">
      <div slot="content" class="work-form">
        <div class="form__upload">
          <div class="form__upload-text">Перетащите или загрузите для загрузки изображения</div>
          <appButton typeAttr="file" title="Загрузить" />
        </div>
        <div class="form__main">
          <div class="form__title form__row">
            <app-input title="Название" />
          </div>
          <div class="form__link form__row">
            <app-input title="Ссылка на сайт" />
          </div>
          <div class="form__description form__row">
            <app-input title="Описание" fieldType="textarea" />
          </div>
          <div class="form__tags form__row">
            <tagsAdder v-model="tags" />
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
import tagsAdder from "../tagsAdder/tagsAdder";
export default {
  name: "WorkValidationForm",
  components: {
    card,
    appInput,
    tagsAdder,
    appButton,
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
.work-form {
  height: 635px;
  display: flex;
  flex-wrap: nowrap;
}
.form {
  &__upload {
    width: 490px;
    height: 280px;
    /* background-color: #dee4ed; */
    margin-right: 35px;
    border: 1px dashed #a1a1a1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-text {
      width: 222px;
      text-align: center;
      font-weight: 600;
      line-height: 20px;
      color: rgba(55, 62, 66, 0.6);
      margin-bottom: 40px;
    }
    &:hover {
      border: 1px dashed #0044ff;
    }
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