<template>
  <div class="page-content">
    <div class="login-component">
      <div class="login-content">
        <div class="login-card">
          <app-input icon="user" />
          <app-input icon="key" />
          <div class="login-button">
            <appButton class="auth-btn" title="Авторизоваться" @click="onClick" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../Card";
import appInput from "../input";
import appButton from "../button";

export default {
  components: {
    card,
    appInput,
    appButton,
  },
};
</script>

<style lang="postcss">
.page-content {
  padding: 0 !important;
}
.login {
  &-card {
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
}
.auth-btn {
  margin: 30px 0 20px;
}
</style>