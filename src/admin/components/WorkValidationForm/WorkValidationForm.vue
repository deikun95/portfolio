<template>
  <div class="form-content">
    <card :title="titleValue">
      <div slot="content" class="work-form">
        <div class="form__upload" :style="{backgroundImage: `url(${getPhoto})`}">
          <div class="form__upload-handle-upload">
            <!-- <div class="form__upload-text">Загрузите изображение</div> -->
            <appButton typeAttr="file" title="Загрузить фото" @change="handleChange" />
          </div>
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
            <tagsAdder v-model="formData.techs" :techs="formData.techs" />
            <div class="message">{{ validation.firstError('formData.techs') }}</div>
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
    isEdited: Boolean,
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
    "formData.techs": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
  },
  data() {
    return {
      formData: {
        title: "",
        link: "",
        description: "",
        techs: "",
        preview: "",
      },
    };
  },
  methods: {
    ...mapActions("work", ["addWorkCard", "addNewWork", "editWorkItem"]),
    saveForm() {
      const techs = this.formData.techs.trim().split(",");
      this.$validate().then((success) => {
        if (success) {
          const newCard = {
            ...this.formData,
            techs,
            // id: Date.now(),
          };
          this.addNewWork({ ...newCard, isEdited: this.isEdited });
          // this.addWorkCard(newCard);

          this.$emit("save-form");
          alert("Работа успешно сохранена!");
        }
      });
    },
    handleChange(event) {
      const file = event.target.files[0];
      this.formData.photo = file;

      this.renderPhoto(file);
    },
    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.formData.preview = reader.result;
      };
    },
  },
  computed: {
    ...mapGetters("work", ["getWorkCards"]),
    titleValue() {
      if (_.isEmpty(this.cardData)) {
        return "Создание работы";
      }
      return "Редактирование работы";
    },
    getPhoto() {
      if (!this.isEdited) {
        return this.formData.preview;
      } else {
        const photoUrl = `${this.$baseUrl}/${this.cardData.photo}`;
        return photoUrl;
      }
    },
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
  min-height: 635px;
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
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    &-handle-upload {
      text-align: center;
    }
    &-text {
      background-color: #fff;
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
    /* height: 280px; */
  }
  &__row {
    margin-bottom: 27px;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
}
.upload-preview {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.message {
  margin-top: 5px;
  color: red;
}
</style>