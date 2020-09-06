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
            <app-input v-model="formData.title" title="Название" />
          </div>
          <div class="form__link form__row">
            <app-input v-model="formData.link" title="Ссылка на сайт" />
          </div>
          <div class="form__description form__row">
            <app-input v-model="formData.description" title="Описание" fieldType="textarea" />
          </div>
          <div class="form__tags form__row">
            <tagsAdder v-model="formData.tags" :tags="formData.tags" />
          </div>
          <div class="form__buttons">
            <appButton plain title="Отправить" />
            <appButton title="Сохранить" @click="saveForm" />
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WorkValidationForm",
  components: {
    card,
    appInput,
    tagsAdder,
    appButton,
  },
  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: {
        title: "",
        link: "",
        description: "",
        tags: "",
      },
    };
  },
  methods: {
    ...mapActions("work", ["addWorkCard"]),
    saveForm() {
      const tags = this.formData.tags.trim().split(",");
      console.log(tags);
      const newCard = {
        ...this.formData,
        tags,
        id: Date.now(),
      };
      this.addWorkCard(newCard);
      this.$emit("save-form");
    },
  },
  computed: {
    ...mapGetters("work", ["getWorkCards"]),
  },
  mounted() {
    if (!_.isEmpty(this.cardData)) {
      this.formData = this.cardData;
    }
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