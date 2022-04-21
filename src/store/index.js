import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "nature",
    themeList: [
      {
        text: "自然 Nature",
        value: "nature",
      },
      {
        text: "典雅 Elegant",
        value: "elegant",
      },
      {
        text: "少女 Pink",
        value: "pink",
      },
      {
        text: "天空 Sky",
        value: "sky",
      },
    ],
  },
  mutations: {
    themeSelect: (state, value) => {
      state.theme = value;
    },
  },
  actions: {},
  modules: {},
});
