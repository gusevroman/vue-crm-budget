/* eslint-disable no-useless-catch */
import firebase from 'firebase/app';

export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw error;
      }
    },
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password, name);
        const uid = dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 100,
          name,
        });
      } catch (error) {
        throw error;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout() {
      await firebase.auth().signOut();
    },
  },
};
