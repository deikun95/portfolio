<template>
  <div class="reviews-content">
    <div class="card add-card">
      <square-btn type="square" title="Добавить отзыв" @click="addForm" />
    </div>
    <card class="card" v-for="card in cards" :key="card.id">
      <div slot="title" class="card__header">
        <div class="avatar">
          <avatar size="3.4" src="src\images\content\user.jpg" />
        </div>
        <div class="user">
          <span class="user-name">Владимир Сабанцев</span>
          <span class="user-pos">Преподаватель</span>
        </div>
      </div>
      <div class="card__body" slot="content">
        <div class="card__description">
          <div class="card__main">
            <p>Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!</p>
          </div>
          <div class="card__buttons">
            <icon symbol="pencil" class="btn" title="Править" />
            <icon symbol="cross" class="btn" title="Удалить" />
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import tag from "../tag";
import icon from "../icon";
import squareBtn from "../button";
import card from "../card";
import avatar from "../avatar";

export default {
  name: "ReviewCard",
  components: {
    tag,
    icon,
    squareBtn,
    card,
    avatar,
  },
  data(){
    return{
      cards: [
        {id:0},
        {id:1},
        {id:2},
        {id:3},
        {id:4},
      ]
    }
  },
  methods: {
    addForm() {
      this.$emit("add-form");
    },
  },
};
</script>

<style lang="postcss" scoped>
.card {
  overflow: hidden;
  border-radius: 5px;
  perspective: 1px;
  box-shadow: 9px 12px 44px -32px rgba(0, 0, 0, 0.62);
  display: block;
  width: 340px;
  height: 385px;
  margin: 0 28px 28px 0;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-weight: 600;
    line-height: 40px;
    font-size: 18px;
  }
  &__main {
    line-height: 30px;
    color: rgba(65, 76, 99, 0.5);
    font-weight: 600;
  }
  &__buttons {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
  }
}
.link-value {
  text-decoration: none;
  color: #383bcf;
  font-weight: 600;
}
.user {
  &-name {
    color: #414c63;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
  &-pos {
    font-weight: 600;
    line-height: 22px;
    color: rgba(65, 76, 99, 0.5);
  }
}
.avatar {
  margin-right: 18px;
}
</style>