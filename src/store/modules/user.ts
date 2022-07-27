import { defineStore } from "pinia";
import { userInfo } from "@/@types/interface";



export const useUserStore = defineStore("user", {
  state: (): userInfo => ({
    username:'',
    password:'',
  }),
  getters: {},
  actions: {
    getUserInfo(params: userInfo) {
      this.username = params.username
      this.password = params.password
    },
  },
});
