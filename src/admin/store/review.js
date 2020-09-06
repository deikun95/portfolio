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
      state.reviewCards = state.reviewCards.filter((card) => card.id !== payload);
    },
  },
  actions: {
    addReviewCard({ commit }, payload) {
      commit("ADD_REVIEW_CARD", payload);
    },
    deleteReviewCard({ commit }, payload) {
      commit("DELETE_REVIEW_CARD", payload);
    },
  },
};
