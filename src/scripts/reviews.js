import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
  el: "#reviews-component",
  template: "#reviews",
  components: {
    Flickity,
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        groupCells: true,
      },
    };
  },
  methods: {
    requiredPhotos() {
      this.reviews = this.reviews.map((review) => {
        review.photo = require(`../images/content/${review.photo}`).default;
        return review;
      });
    },
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
  mounted() {
    this.requiredPhotos();
    const self = this.$refs;
    self.prevBtn.style.opacity = 0.2;
    self.prevBtn.style.cursor = "initial";
    this.$refs.flickity.on("settle", function(pos) {
      if (this.slides.length - 1 === pos) {
        self.nextBtn.style.opacity = 0.2;
        self.nextBtn.style.cursor = "initial";
      } else {
        self.nextBtn.style.opacity = 1;
        self.nextBtn.style.cursor = "pointer";
      }
      if (pos === 0) {
        self.prevBtn.style.opacity = 0.2;
        self.prevBtn.style.cursor = "initial";
      } else {
        self.prevBtn.style.opacity = 1;
        self.prevBtn.style.cursor = "pointer";
      }
    });
  },
  created() {
    this.reviews = require("../data/reviews.json");
  },
});
