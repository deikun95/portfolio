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
        skill_id: payload.skillId,
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
    DELETE_SKILL_ITEM: (state, payload) => {
      state.categories = state.categories.map((item) => {
        item.skills = item.skills.filter((skill) => skill.skill_id !== payload);
        return item;
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
    EDIT_SKILL_ITEM: (state, payload) => {
      console.log(state.categories, "///");
      state.categories = state.categories.map((item) => {
        item.skills = item.skills.map((skill) => {
          if (skill.skill_id === payload.skill_id) {
            return payload
          }
          return skill;
        });
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
    deleteSkillItem({ commit }, payload) {
      commit("DELETE_SKILL_ITEM", payload);
    },
    refreshCategoryTitle({ commit }, payload) {
      commit("REFRESH_CATEGORY_TITLE", payload);
    },
    editSkillItem({ commit }, payload) {
      commit("EDIT_SKILL_ITEM", payload);
    },
  },
};
