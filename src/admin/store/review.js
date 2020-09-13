import axios from "axios";
import lodash from "lodash";

const baseUrl = "https://webdev-api.loftschool.com";

export default {
  namespaced: true,
  state: {
    reviewCards: [],
  },
  getters: {
    getReviewCards: (state) => state.reviewCards,
  },
  mutations: {
    ADD_REVIEW_CARD: (state, payload) => {
      console.log(payload, "ADD REVIEW");
      const isFinded = state.reviewCards.find((item) => item.id === payload.id);
      // console.log(isFinded)
      // debugger;
      if (isFinded) {
        // debugger;
        state.reviewCards = state.reviewCards.map((item) => {
          if (item.id === payload.id) {
            console.log(payload);
            return payload;
          }
          return item;
        });
      } else {
        // debugger;
        state.reviewCards.push(payload);
      }
    },
    DELETE_REVIEW_CARD: (state, payload) => {
      state.reviewCards = state.reviewCards.filter(
        (card) => card.id !== payload
      );
    },
    SET_ALL_REVIEWS: (state, payload) => {
      state.reviewCards = payload;
    },
  },
  actions: {
    // addReviewCard({ commit }, payload) {
    //   commit("ADD_Review_CARD", payload);
    // },
    deleteReviewCard({ commit }, payload) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;

      axios.delete(`${baseUrl}/reviews/${payload}`);

      commit("DELETE_REVIEW_CARD", payload);
    },
    addNewReview({ commit }, payload) {
      console.log(payload);

      const formData = new FormData();

      Object.keys(payload).forEach((item) => {
        if (item !== "preview" && item !== "isEdited") {
          formData.append(item, payload[item]);
        }
        return;
      });

      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      if (!payload.isEdited) {
        axios.post(`${baseUrl}/reviews`, formData).then((res) => {
          commit("ADD_REVIEW_CARD", { ...res.data, preview: payload.preview });
        });
      } else {
        axios.post(`${baseUrl}/reviews/${payload.id}`, formData).then((res) => {
          commit("ADD_REVIEW_CARD", {
            ...res.data.review,
            preview: payload.preview,
          });
        });
      }
    },
    fetchAllReviews({ commit }) {
      const userId = localStorage.getItem("userId");
      axios.get(`${baseUrl}/reviews/${userId}`).then((res) => {
        console.log(res.data);
        commit("SET_ALL_REVIEWS", res.data);
      });
    },
  },
};
