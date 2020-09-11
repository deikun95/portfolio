import axios from "axios";

const baseUrl = "https://webdev-api.loftschool.com";

export default {
  namespaced: true,
  state: {
    categories: [],
    cards: [],
  },
  getters: {
    getAllCategories: (state) => {
      return state.categories;
    },
    getAllCards: (state) => {
      return state.cards;
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
    // DELETE_CATEGORY_ITEM: (state, payload) => {
    //   state.categories = state.categories.filter((item) => {
    //     return item.id !== payload;
    //   });
    // },
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
            return payload;
          }
          return skill;
        });
        return item;
      });
    },

    // СОЗДАНИЕ КАРТОЧЕК ПОСРЕДСТВОМ ВЗАИМОДЕЙСТВИЯ С API

    ADD_NEW_CARD: (state, payload) => {
      state.cards.push(payload);
    },
    ADD_NEW_CATEGORY: (state, payload) => {
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.category = {
            category: payload.category,
            category_id: payload.id,
          };
        }
        return card;
      });
      console.log();
    },
    EDIT_CATEGORY_ITEM: (state, payload) => {
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.category.category = payload.categoryTitle;
          return card;
        }
        return card;
      });
    },
    DELETE_CATEGORY_ITEM: (state, payload) => {
     state.cards = state.cards.filter((card) => card.cardId !== payload.cardId);
    },
  },
  actions: {
    addCategoryItem({ commit }, payload) {
      commit("ADD_CATEGORY_ITEM", payload);
      //   axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
      //     "token"
      //   )}`;
      //   axios.post(`${baseUrl}/categories`, {title: payload.title});
    },
    addSkillItem({ commit }, payload) {
      commit("ADD_SKILL_ITEM", payload);
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/categories`, { title: payload.title });
    },
    // deleteCardItem({ commit }, payload) {
    //   commit("DELETE_CATEGORY_ITEM", payload);
    // },
    deleteSkillItem({ commit }, payload) {
      commit("DELETE_SKILL_ITEM", payload);
    },
    refreshCategoryTitle({ commit }, payload) {
      //   commit("REFRESH_CATEGORY_TITLE", payload);

      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/categories`, { title: payload.title });
    },
    editSkillItem({ commit }, payload) {
      commit("EDIT_SKILL_ITEM", payload);
    },

    // СОЗДАНИЕ КАРТОЧЕК ПОСРЕДСТВОМ ВЗАИМОДЕЙСТВИЯ С API

    addNewCard({ commit }, payload) {
      commit("ADD_NEW_CARD", payload);
    },
    addNewCategory({ commit }, payload) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios
        .post(`${baseUrl}/categories`, { title: payload.title })
        .then((res) => {
          commit("ADD_NEW_CATEGORY", { ...res.data, cardId: payload.cardId });
        });
    },
    editCategoryItem({ commit }, payload) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios
        .post(`${baseUrl}/categories/${payload.category.category_id}`, {
          title: payload.categoryTitle,
        })
        .then((res) => {
          commit("EDIT_CATEGORY_ITEM", payload);
        });
    },
    deleteCategoryItem({ commit }, payload) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios
        .delete(`${baseUrl}/categories/${payload.category.category_id}`)
        .then((res) => {
          commit("DELETE_CATEGORY_ITEM", payload);
        });
    },
  },
};
