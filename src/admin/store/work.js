export default {
  namespaced: true,
  state: {
    workCards: [],
  },
  getters: {
    getWorkCards: (state) => state.workCards,
  },
  mutations: {
    ADD_WORK_CARD: (state, payload) => {
      const isFinded = state.workCards.find((item) => item.id === payload.id);
      // console.log(isFinded)
      // debugger;
      if (isFinded) {
        // debugger;
        state.workCards = state.workCards.map((item) => {
          if (item.id === payload.id) {
            console.log(payload);
            return payload;
          }
          return item;
        });
      } else {
        // debugger;
        state.workCards.push(payload);
      }
    },
    DELETE_WORK_CARD: (state, payload) => {
      state.workCards = state.workCards.filter((card) => card.id !== payload);
    },
  },
  actions: {
    addWorkCard({ commit }, payload) {
      commit("ADD_WORK_CARD", payload);
    },
    deleteWorkCard({ commit }, payload) {
      commit("DELETE_WORK_CARD", payload);
    },
  },
};
