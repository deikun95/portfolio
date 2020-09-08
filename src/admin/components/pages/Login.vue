<template>
  <div class="page-content">
    <div class="login-component">
      <div class="login-content">
        <form class="login-card">
          <div class="login-title">Авторизация</div>
          <app-input class="login-input" v-model="user.name" title="Логин" icon="user" />
          <div class="message">{{ validation.firstError('user.name') }}</div>
          <app-input class="login-input" v-model="user.password" title="Пароль" icon="key" />
          <div class="message">{{ validation.firstError('user.password') }}</div>
          <div class="login-button">
            <appButton class="auth-btn" @click="submitHandler" title="Войти" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../Card";
import appInput from "../input";
import appButton from "../button";
import SimpleVueValidator from "simple-vue-validator";

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    "user.name": function (value) {
      return Validator.value(value).required("Введите логин");
    },
    "user.password": function (value) {
      return Validator.value(value).required("Введите пароль");
    },
  },
  components: {
    card,
    appInput,
    appButton,
  },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      token: null,
    };
  },
  methods: {
    submitHandler() {
      this.$validate().then((success) => {
        if (success) {
          const userData = {
              name: this.user.name,
              password: this.user.password
          }
          this.$axios
            .post("https://webdev-api.loftschool.com/login", userData)
            .then((res) => {
              this.token = res.data.token
              console.log(this.token)
            })
            .catch((err) => console.log(err));
        }
      });
    },
  },
};
</script>

<style lang="postcss">
.page-content {
  padding: 0 !important;
}
.login {
  &-card {
    display: block;
    padding: 20px 40px;
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
  }
  &-component {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-button {
    text-align: center;
    padding-top: 20px;
  }
  &-input {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
  &-title {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
}
.auth-btn {
  margin: 30px 0 20px;
}
.message {
  margin-top: 10px;
  color: red;
}
</style>