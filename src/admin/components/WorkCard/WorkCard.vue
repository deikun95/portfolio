<template>
  <div class="works-content">
    <div class="card add-card">
      <square-btn type="square" title="Добавить работу" @click="addForm" />
    </div>
    <div class="card" v-for="card in getWorkCards" :key="card.id">
      <div class="card__header">
        <div class="card__img"></div>
        <div class="card__tags">
          <tag :title="tag" v-for="tag in card.tags" :key="tag.id" />
        </div>
      </div>
      <div class="card__body">
        <div class="card__description">
          <div class="card__title">
            <span>{{card.title}}</span>
          </div>
          <div class="card__main">
            <p>{{card.description}}</p>
          </div>
          <div class="card__link">
            <a href="#" class="link-value">{{card.link}}</a>
          </div>
        </div>
        <div class="card__buttons">
          <icon symbol="pencil" class="btn" title="Править" @click="editCard(card)" />
          <icon symbol="cross" class="btn" title="Удалить" @click="deleteCard(card)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tag from "../tag";
import icon from "../icon";
import squareBtn from "../button";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorkCard",
  components: {
    tag,
    icon,
    squareBtn,
  },
  methods: {
    ...mapActions("work", ["deleteWorkCard"]),
    deleteCard(card) {
      this.deleteWorkCard(card.id);
    },
    addForm() {
      this.$emit("add-form");
    },
    editCard(card) {
      const tags = card.tags.join(", ");
      const editingCard = {
        ...card,
        tags,
      };
      this.$emit("edit-card", editingCard)
    },
  },
  computed: {
    ...mapGetters("work", ["getWorkCards"]),
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
  height: 560px;
  /* background-color: green; */
  margin: 0 28px 28px 0;
  &__header {
    height: 190px;
    position: relative;
    /* background-color: #000; */
  }
  &__body {
    display: flex;
    flex-direction: column;
    height: 370px;
    background-color: rgb(255, 255, 255);
  }
  &__img {
    background-image: url("../../../images/content/slider-1.jpg");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__tags {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &__description {
    padding: 35px 30px;
    flex: 1 0 auto;
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
    max-height: 50%;
    overflow: hidden;
  }
  &__link {
    margin-top: 26px;
  }
  &__buttons {
    padding: 0 30px 40px;
    /* margin-top: 35px; */
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
  }
}
.link-value {
  text-decoration: none;
  color: #383bcf;
  font-weight: 600;
}
.add-card {
}
</style>