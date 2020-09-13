import axios from "axios";
import lodash from "lodash";

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
    // ADD_CATEGORY_ITEM: (state, payload) => {
    //   state.categories.push(payload);
    // },
    ADD_SKILL_ITEM: (state, payload) => {
      console.log(payload, "ADD_SKILL_ITEM");
      const newSkill = {
        title: payload.title,
        percent: payload.percent,
        id: payload.id,
      };
      state.cards = state.cards.map((card) => {
        if (card.cardId === payload.category || card.id === payload.category) {
          card.skills.push(newSkill);
        }
        return card;
      });
    },
    // DELETE_CATEGORY_ITEM: (state, payload) => {
    //   state.categories = state.categories.filter((item) => {
    //     return item.id !== payload;
    //   });
    // },
    // DELETE_SKILL_ITEM: (state, payload) => {
    //   state.categories = state.categories.map((item) => {
    //     item.skills = item.skills.filter((skill) => skill.skill_id !== payload);
    //     return item;
    //   });
    // },
    REFRESH_CATEGORY_TITLE: (state, payload) => {
      state.categories = state.categories.map((item) => {
        if (item.id === payload.id) {
          item.title = payload.val;
        }
        return item;
      });
    },
    // EDIT_SKILL_ITEM: (state, payload) => {
    //   console.log(state.categories, "///");
    //   state.categories = state.categories.map((item) => {
    //     item.skills = item.skills.map((skill) => {
    //       if (skill.skill_id === payload.skill_id) {
    //         return payload;
    //       }
    //       return skill;
    //     });
    //     return item;
    //   });
    // },

    // СОЗДАНИЕ КАРТОЧЕК ПОСРЕДСТВОМ ВЗАИМОДЕЙСТВИЯ С API

    ADD_NEW_CARD: (state, payload) => {
      state.cards.push(payload);
    },
    ADD_NEW_CATEGORY: (state, payload) => {
      console.log(payload, "ADD_NEW_CATEGORY");
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.category = payload.category;
          card.id = payload.id;
        }
        return card;
      });
    },
    EDIT_CATEGORY_ITEM: (state, payload) => {
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.category = payload.title;
          return card;
        }
        return card;
      });
    },
    EDIT_SKILL_ITEM: (state, payload) => {
      console.log(payload, "EDIT_SKILL_ITEM");
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.skills.map((skill) => {
            if (skill.id === payload.skillId) {
              skill.title = payload.title;
              skill.percent = payload.percent;
            }
            return skill;
          });
          return card;
        }
        return card;
      });
    },
    DELETE_CATEGORY_ITEM: (state, payload) => {
      state.cards = state.cards.filter(
        (card) => card.cardId !== payload.cardId
      );
    },
    DELETE_SKILL_ITEM: (state, payload) => {
      console.log(payload, "mutation-delete");
      state.cards.map((card) => {
        if (card.cardId === payload.cardId) {
          card.skills = card.skills.filter((skill) => skill.id !== payload.id);
          return card;
        }
        return card;
      });
    },
    SET_ALL_CATEGORIES: (state, payload) => {
      console.log(payload, "new");
      const newArr = payload
        .map((item) => {
          item.cardId = item.id;
          return item;
        })
        .filter((item) => !_.isEmpty(item.skills));
      state.cards = newArr;
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
    // addSkillItem({ commit }, payload) {
    //   commit("ADD_SKILL_ITEM", payload);
    //   axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
    //     "token"
    //   )}`;
    //   axios.post(`${baseUrl}/categories`, { title: payload.title });
    // },
    // deleteCardItem({ commit }, payload) {
    //   commit("DELETE_CATEGORY_ITEM", payload);
    // },
    // deleteSkillItem({ commit }, payload) {
    //   commit("DELETE_SKILL_ITEM", payload);
    // },
    refreshCategoryTitle({ commit }, payload) {
      //   commit("REFRESH_CATEGORY_TITLE", payload);

      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/categories`, { title: payload.title });
    },
    // editSkillItem({ commit }, payload) {
    //   commit("EDIT_SKILL_ITEM", payload);
    // },

    // СОЗДАНИЕ КАРТОЧЕК ПОСРЕДСТВОМ ВЗАИМОДЕЙСТВИЯ С API

    addNewCard({ commit }, payload) {
      console.log(payload, "addNewCard");
      commit("ADD_NEW_CARD", payload);
    },
    addNewCategory({ commit }, payload) {
      console.log(payload);
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
      console.log(payload, "edit");
      commit("EDIT_CATEGORY_ITEM", payload);
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/categories/${payload.id}`, {
        title: payload.title,
      });
    },
    deleteCategoryItem({ commit }, payload) {
      console.log(payload, "delete");
      commit("DELETE_CATEGORY_ITEM", payload);

      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      if (payload.id) {
        axios.delete(`${baseUrl}/categories/${payload.id}`);
      }
    },
    addSkillItem({ commit }, payload) {
      console.log(payload, "addSkill");
      const newSkill = {
        title: payload.title,
        percent: payload.percent,
        category: payload.id,
      };
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/skills`, newSkill).then((res) => {
        commit("ADD_SKILL_ITEM", res.data);
      });
    },
    deleteSkillItem({ commit }, payload) {
      console.log(payload, "deleteSkill");
      commit("DELETE_SKILL_ITEM", payload);
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.delete(`${baseUrl}/skills/${payload.id}`);
    },
    editSkillItem({ commit }, payload) {
      console.log(payload, "editSkillItem");
      const newSkill = {
        title: payload.title,
        percent: payload.percent,
        category: payload.id,
      };
      commit("EDIT_SKILL_ITEM", payload);
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.post(`${baseUrl}/skills/${payload.skillId}`, newSkill);
    },
    getUserId({ dispatch }) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      axios.get(`${baseUrl}/user`).then((res) => {
        const userId = res.data.user.id;
        localStorage.setItem("userId", userId);
        dispatch("fetchAllCategories");
      });
    },
    fetchAllCategories({ commit }) {
      const userId = localStorage.getItem("userId");
      axios.get(`${baseUrl}/categories/${userId}`).then((res) => {
        console.log(res.data);
        commit("SET_ALL_CATEGORIES", res.data);
      });
    },
  },
};
