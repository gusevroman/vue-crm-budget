import firebase from 'firebase/app';

export default {
  actions: {
    async fetchCategories({ commit, dispatch }) {
      try {
        const uid = await dispatch('getUid');
        const categories =
          (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {};
        return Object.keys(categories).map((key) => ({ ...categories[key], id: key }));
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async updateCategory({ commit, dispatch }, { title, id }) {
      try {
        const uid = await dispatch('getUid');
        await firebase.database().ref(`users/${uid}/categories`).child(id).update({ title });
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async createCategory({ commit, dispatch }, { title }) {
      try {
        const uid = await dispatch('getUid');
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({ title });
        return { title, id: category.key };
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async deleteCategory({ commit, dispatch }, { id }) {
      try {
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/categories`).child(id).remove();
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
  },
};
