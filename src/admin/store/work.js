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
      const isFinded = state.workCards.find(item => item.id === payload.id)
      if (isFinded) {
        state.workCards = state.workCards.map(item => {
          return payload
        })
      }
      state.workCards.push(payload);
    },
    DELETE_WORK_CARD:(state, payload) => {
      state.workCards = state.workCards.filter(card => card.id !== payload)
    }
  },
  actions: {
    addWorkCard({ commit }, payload) {
      console.log(payload)
      commit("ADD_WORK_CARD", payload);
    },
    deleteWorkCard({commit}, payload){
      commit("DELETE_WORK_CARD", payload)
    }
  },
};
