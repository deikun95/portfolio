import Vue from "vue";

const thumbsItem = {
  props: ["work", "currentWork"],
  template: "#slider-thumbs-item",
  methods: {
    handlePhoto() {
      console.log(this.work.id);
      this.$emit("change-photo", this.work.id - 1);
    },
  },
};

const thumbs = {
  props: ["works", "currentWork"],
  template: "#slider-thumbs",
  components: {
    thumbsItem,
  },
  methods: {
    changePhoto($event) {
      this.$emit("change-photo", $event);
    },
  },
};

const btns = {
  props: ["currentWork", "currentPhoto"],
  template: "#slider-btns",
  data() {
    return {
      newCurrentPhoto: 0,
    };
  },
  methods: {
    handlePhotoDown() {
      this.newCurrentPhoto = this.currentPhoto;
      this.newCurrentPhoto += 1;
      this.$emit("change-photo", this.newCurrentPhoto);
      if (this.currentPhoto === 2) {
        this.newCurrentPhoto = 0;
        this.$emit("change-photo", this.newCurrentPhoto);
      }
    },
    handlePhotoUp() {
      this.newCurrentPhoto = this.currentPhoto;
      this.newCurrentPhoto -= 1;
      this.$emit("change-photo", this.newCurrentPhoto);
      if (this.currentPhoto === 0) {
        this.newCurrentPhoto = 2;
        this.$emit("change-photo", this.newCurrentPhoto);
      }
    },
  },
};

const tags = {
  template: "#slider-tags",
};

const info = {
  props: ["currentWork"],
  template: "#slider-info",
  components: { tags },
};

const display = {
  props: ["currentWork", "works", "currentPhoto"],
  template: "#slider-display",
  components: {
    thumbs,
    btns,
  },
  methods: {
    changePhoto($event) {
      this.$emit("change-photo", $event);
    },
  },
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display,
    info,
  },
  data() {
    return {
      works: [],
      currentWork: {},
      currentPhoto: 0,
    };
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.photo}`)
          .default;
        item.photo = requiredImage;
        return item;
      });
    },
    changePhoto($event) {
      this.currentPhoto = $event;
      this.currentWork = this.works[this.currentPhoto];
    },
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
    this.currentWork = this.works[this.currentPhoto];
  },
});
