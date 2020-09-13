import axios from "axios";
import lodash from "lodash";

const baseUrl = "https://webdev-api.loftschool.com";

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
      console.log(payload, "ADD WORL");
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
    SET_ALL_WORKS: (state, payload) => {
      state.workCards = payload
    }
  },
  actions: {
    // addWorkCard({ commit }, payload) {
    //   commit("ADD_WORK_CARD", payload);
    // },
    deleteWorkCard({ commit }, payload) {
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;

      axios.delete(`${baseUrl}/works/${payload}`);

      commit("DELETE_WORK_CARD", payload);
    },
    addNewWork({ commit }, payload) {
      console.log(payload);

      const formData = new FormData();

      Object.keys(payload).forEach((item) => {
        if (item !== "preview" && item !== "isEdited") {
          formData.append(item, payload[item]);
        }
        return;
      });

      const techs = payload.techs.join(", ");
      const workData = {
        title: payload.title,
        techs,
        photo: payload.photo,
        link: payload.link,
        description: payload.description,
      };
      axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      if (!payload.isEdited) {
        axios.post(`${baseUrl}/works`, formData).then((res) => {
          commit("ADD_WORK_CARD", { ...res.data, preview: payload.preview });
        });
      } else {
        axios.post(`${baseUrl}/works/${payload.id}`, formData).then((res) => {
          commit("ADD_WORK_CARD", {
            ...res.data.work,
            preview: payload.preview,
          });
        });
      }
    },
    fetchAllWorks({ commit }) {
      const userId = localStorage.getItem("userId");
      axios.get(`${baseUrl}/works/${userId}`).then((res) => {
        console.log(res.data);
        commit("SET_ALL_WORKS", res.data);
      });
    },
  },
};
