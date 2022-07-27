import { defineStore } from "pinia";
import { IUserInfo, IUserStore, IAccount } from "../types/user";

const userInfo: IUserInfo = {
  name: "",
  age: 0,
  idCard: "",
};

const account: IAccount = {
  userName: "",
  password: "",
};

export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({
    userInfo: userInfo,
    account: account,
    role: [],
  }),
  getters: {},
  actions: {
    getUserInfo(params: IUserInfo) {
      this.userInfo = { ...params }
    },
  },
});
