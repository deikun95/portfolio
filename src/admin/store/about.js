export default {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    getAllCategories: (state) => {
      return state.categories;
    },
  },
  mutations: {
    ADD_CATEGORY_ITEM: (state, payload) => {
      state.categories.unshift(payload);
    },
    ADD_SKILL_ITEM: (state, payload) => {
      const newSkill = {
        title: payload.title,
        percent: payload.percent,
      };
      state.categories = state.categories.map((item) => {
        if (item.id === payload.id) {
          item.skills.push(newSkill);
        }
        return item;
      });
    },
    DELETE_CATEGORY_ITEM: (state, payload) => {
      state.categories = state.categories.filter((item) => {
        return item.id !== payload;
      });
    },
    REFRESH_CATEGORY_TITLE: (state, payload) => {
      state.categories = state.categories.map((item) => {
        if (item.id === payload.id) {
          item.title = payload.val;
        }
        return item;
      });
    },
  },
  actions: {
    addCategoryItem({ commit }, payload) {
      commit("ADD_CATEGORY_ITEM", payload);
    },
    addSkillItem({ commit }, payload) {
      commit("ADD_SKILL_ITEM", payload);
    },
    deleteCardItem({ commit }, payload) {
      commit("DELETE_CATEGORY_ITEM", payload);
    },
    refreshCategoryTitle({ commit }, payload) {
      commit("REFRESH_CATEGORY_TITLE", payload);
    },
  },
};
