import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    apiURL: "http://localhost:8000/api/", // TODO change with domain name for api
    jwt: null,
    ephemeral_token: null,
    loggedIn: false,
    entity: {
      name: "Bitmec",
      registered_users: 0,
      total_cases: 0,
      confirmed_cases: 0,
      recovered_cases: 0,
      deceased_cases: 0
    },
    patients: [],
    recent_scans: []
  },
  getters,
  actions,
  mutations
});
