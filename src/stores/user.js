import { defineStore } from 'pinia';

export default defineStore('User Store', {
  // Data
  state: () => ({
    name: 'Casper',
    wallet: 300,
  }),
  // Computed
  getters: {
    getUserName: (state) => `My name is ${state.name}`,
  },
  // Methods
  actions: {
    updateName() {
      this.name = 'Ray';
    },
  },
});
