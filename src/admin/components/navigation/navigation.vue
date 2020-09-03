<template>
  <nav class="navigation-component">
    <div class="container">
      <ul class="list">
        <li v-for="link in links" :key="link.id" :class="['item', {active: link.active }]">
          <a href="`/${link.alias}`" class="link">{{link.title}}</a>
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
    alias: "about",
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
</style>