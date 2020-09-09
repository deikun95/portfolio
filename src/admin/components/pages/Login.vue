<template>
  <div class="page-content">
    <div class="login-component">
      <div class="login-content">
        <form class="login-card">
          <div class="auth" v-if="isAuth">
            <div class="login-title">Авторизация</div>
            <app-input
              class="login-input"
              v-model="user.name"
              title="Логин"
              icon="user"
              @keyup.enter="submitHandler"
            />
            <div class="message">{{ validation.firstError("user.name") }}</div>
            <app-input
              class="login-input"
              type="password"
              v-model="user.password"
              title="Пароль"
              @keyup.enter="submitHandler"
              icon="key"
            />
            <div class="message">
              {{ validation.firstError("user.password") }}
            </div>
          </div>
          <div class="register" v-else>
            <div class="login-title">Регистрация</div>
            <app-input
              class="login-input"
              v-model="user.name"
              title="Логин"
              icon="user"
              @keyup.enter="submitHandler"
            />
            <div class="message">{{ validation.firstError("user.name") }}</div>
            <app-input
              class="login-input"
              type="password"
              v-model="user.password"
              title="Пароль"
              @keyup.enter="submitHandler"
              icon="key"
            />
            <div class="message">
              {{ validation.firstError("user.password") }}
            </div>
          </div>
          <div class="login-button">
            <div class="login-button">
              <appButton
                class="auth-btn"
                @click="regHandler"
                plain
                title="Зарегистрироваться"
              />

              <appButton
                v-if="!isReg"
                class="auth-btn"
                @click="submitHandler"
                title="Войти"
              />
            </div>
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
    "user.name": function(value) {
      return Validator.value(value).required("Введите логин");
    },
    "user.password": function(value) {
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
      isAuth: true,
      isReg: false,
    };
  },
  methods: {
    submitHandler() {
      this.$validate().then((success) => {
        if (success) {
          const userData = {
            name: this.user.name,
            password: this.user.password,
          };
          this.$axios
            .post("https://webdev-api.loftschool.com/login", userData)
            .then((res) => {
              const token = res.data.token;
              localStorage.setItem("token", token);
              this.$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
              this.$router.replace("/");
            })
            .catch((err) => console.log(err));
        }
      });
    },
    regHandler() {
      this.isAuth = false;
      const userData = {
        name: this.user.name,
        password: this.user.password,
      };
      this.$validate().then((success) => {
        if (success) {
          if (this.isReg === true) {
            this.$axios.post(`${this.$baseUrl}/register`, userData).then(() => {
              (this.isReg = false), (this.isAuth = true);
            });
          }
          this.isReg = true;
        }
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.page-content {
  padding: 0 !important;
}
.login {
  &-card {
    display: block;
    padding: 20px 40px;
    width: 500px;
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
    display: flex;
    justify-content: center;
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
