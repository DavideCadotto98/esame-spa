import axios from "axios";
import { createStore } from "vuex";

const BaseUrl = "http://localhost:3000/";

export default createStore({
  state: {
    exampleObject: {},
  },
  getters: {
    exampleGetters(state) {
      return state.exampleObject;
    },
  },
  mutations: {
    ExampleFillRequest(state, exampleResul) {
      state.exampleObject = exampleResul;
    },
  },
  actions: {
    async ExampleCall({ commit }) {
      const res = await axios.get(`${BaseUrl}posts/1`);
      commit("ExampleFillRequest", res.data);
    },
  },
});
