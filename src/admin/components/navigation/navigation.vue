<template>
  <nav class="navigation-component">
    <div class="container">
      <ul class="list">
        <li
          v-for="link in links"
          :key="link.id"
          class="nav-item"
          @click="navigationHandle(link.id)"
        >
          <router-link
            :to="`/${link.alias}`"
            :class="['link', { active: link.active }]"
            >{{ link.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeLinkId: null,
      links: [
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
          active: false,
        },
        {
          id: 2,
          title: "Отзывы",
          alias: "reviews",
          active: false,
        },
      ],
      activeNavs: {
        activeWork: false,
        activeReview: false,
        activeAbout: false,
      },
    };
  },
  methods: {
    navigationHandle(data) {
      this.links.forEach((item) => {
        if (item.id === data) {
          item.active = true;
        } else if (item.id !== data) {
          item.active = false;
        }
      });
    },
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
.link.active {
  padding: 30px;
  font-size: 16px;
  font-weight: 600;
  display: block;
  text-decoration: none;
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
</style>
