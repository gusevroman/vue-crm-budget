import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import info from './modules/info';
import record from './modules/record';
import category from './modules/category';
import { URLCurrency } from '../services/constants';

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
