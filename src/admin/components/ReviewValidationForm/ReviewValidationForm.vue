<template>
  <div class="form-content">
    <card :title="titleValue">
      <div slot="content" class="review-form">
        <div class="form__upload">
          <div class="form__upload-img">
            <avatar size="15" :src="`${getPhoto}`" />
          </div>
          <appButton typeAttr="file" plain title="Добавить фото" @change="handleChange" />
        </div>
        <div class="form__main">
          <div class="form__title form__row">
            <app-input v-model="formData.author" title="Имя автора" />
            <div class="message">{{ validation.firstError('formData.author') }}</div>
          </div>
          <div class="form__link form__row">
            <app-input v-model="formData.occ" title="Титуал автора" />
            <div class="message">{{ validation.firstError('formData.occ') }}</div>
          </div>
          <div class="form__description form__row">
            <app-input v-model="formData.text" title="Отзыв" fieldType="textarea" />
            <div class="message">{{ validation.firstError('formData.text') }}</div>
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
import card from "../Card";
import appInput from "../input";
import appButton from "../button";
import avatar from "../avatar/avatar";
import { mapActions, mapGetters } from "vuex";
import SimpleVueValidator from "simple-vue-validator";
const Validator = SimpleVueValidator.Validator;

export default {
  name: "reviewValidationForm",
  components: {
    card,
    appInput,
    appButton,
    avatar,
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
    "formData.author": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
    "formData.occ": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
    "formData.text": function (value) {
      return Validator.value(value).required("Поле должно быть заполнено!");
    },
  },
  data() {
    return {
      formData: {
        author: "",
        occ: "",
        text: "",
        preview: "",
      },
    };
  },
  methods: {
    ...mapActions("review", [
      "addReviewCard",
      "addNewReview",
      "editReviewItem",
    ]),
    saveForm() {
      this.$validate().then((success) => {
        if (success) {
          const newCard = {
            ...this.formData,
          };
          this.addNewReview({ ...newCard, isEdited: this.isEdited });

          this.$emit("save-form");
          alert("Отзыв успешно сохранен!");
        }
      });
    },
    handleChange(event) {
      this.isUpload = true;
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
    ...mapGetters("review", ["getReviewCards"]),
    titleValue() {
      if (_.isEmpty(this.cardData)) {
        return "Создание отзыва";
      }
      return "Редактирование отзыва";
    },
    getPhoto() {
      if (!this.isEdited && this.formData.preview === "") {
        const imagePath = "src/images/content/userupload.png"
        return imagePath;
      } else if (this.isUpload) {
        return this.formData.preview;
      } else if (this.isEdited) {
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
.review-form {
  min-height: 500px;
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
    &-img {
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
    /* height: 280px; */
  }
  &__row {
    margin-bottom: 27px;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 11px;
  }
}
.message {
  margin-top: 5px;
  color: red;
}
</style>