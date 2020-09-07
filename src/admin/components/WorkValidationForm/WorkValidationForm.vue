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
            <div class="message">{{ validation.firstError('formData.title') }}</div>
          </div>
          <div class="form__link form__row">
            <app-input v-model="formData.link" title="Ссылка на сайт" />
            <div class="message">{{ validation.firstError('formData.link') }}</div>
          </div>
          <div class="form__description form__row">
            <app-input v-model="formData.description" title="Описание" fieldType="textarea" />
            <div class="message">{{ validation.firstError('formData.description') }}</div>
          </div>
          <div class="form__tags form__row">
            <tagsAdder v-model="formData.tags" :tags="formData.tags" />
            <div class="message">{{ validation.firstError('formData.tags') }}</div>
          </div>
          <div class="form__buttons">
            <appButton plain title="Отправить" />
            <appButton title="Сохранить" @click="saveForm" />
          </div>
        </div>
      </div>!
    </card>
  </div>
</template>

<script>
import card from "../Card";
import appInput from "../input";
import appButton from "../button";
import tagsAdder from "../tagsAdder/tagsAdder";
import { mapActions, mapGetters } from "vuex";
import SimpleVueValidator from "simple-vue-validator";
const Validator = SimpleVueValidator.Validator;

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
  mixins: [SimpleVueValidator.mixin],
  validators: {
    "formData.title": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
    "formData.link": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
    "formData.description": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
    "formData.tags": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
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
      this.$validate().then((success) => {
        if (success) {
          if (!this.cardData.id) {
            const newCard = {
              ...this.formData,
              tags,
              id: Date.now(),
            };
            this.addWorkCard(newCard);
          } else {
            const newCard = {
              ...this.formData,
              tags,
              id: this.cardData.id,
            };

            this.addWorkCard(newCard);
          }
          this.$emit("save-form");
        }
      });
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
  watch: {
    "cardData.id": function (val) {
      this.formData.id = this.cardData.id;
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
.message {
  margin-top: 5px;
  color: red;
}
</style>