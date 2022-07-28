import { defineStore } from "pinia";
import { userInfo } from "@/@types/interface";



const useUserStore = defineStore("user", {
  state: (): userInfo => ({
    username:'',
    password:'',
    avatar:"",
  }),
  getters: {},
  actions: {
    getUserInfo(params: userInfo) {
      this.username = params.username
      this.password = params.password
    },
    setAvatar(params: string) {
      this.avatar = params
    }
  },
});


export default useUserStore;