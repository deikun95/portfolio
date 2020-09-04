<template>
  <nav class="navigation-component">
    <div class="container">
      <ul class="list">
        <li
          v-for="link in links"
          :key="link.id"
          :class="['nav-item', { active: link.active }]"
        >
          <router-link :to="`/${link.alias}`" class="link">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
const links = [
  {
    id: 0,
    title: "Обо мне",
    alias: "",
    active: false,
  },
  {
    id: 1,
    title: "Работы",
    alias: "works",
    active: true,
  },
  {
    id: 2,
    title: "Отзывы",
    alias: "reviews",
    active: false,
  },
];
export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="postcss">
.list {
  display: flex;
}
.link {
  padding: 30px;
  font-size: 16px;
  font-weight: 600;
  display: block;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #383bcf;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: #383bcf;
    }
  }
}
.active {
  .link {
    /* border-bottom: 3px solid #383bcf; */
  }
}
</style>
