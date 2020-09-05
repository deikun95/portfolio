export default {
  namespaced: true,
  state: {
    workCards: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
  },
  getters: {
    getWorkCards: (state) => state.workCards,
  },
  mutations: {},
  actions: {},
};
