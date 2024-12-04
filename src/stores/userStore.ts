import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: ''
  }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    }
  }
});