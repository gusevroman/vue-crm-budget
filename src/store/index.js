import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import info from './info';
import record from './record';
import category from './category';
import URLCurrency from '../services/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.API_CURRENCY_KEY;
      const res = await fetch(`${URLCurrency}=${key}`);
      return await res.json();
    },
  },
  getters: {
    error: (s) => s.error,
  },
  modules: {
    auth,
    info,
    record,
    category,
  },
});
