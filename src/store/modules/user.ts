/*
 * @Author: RenJie
 * @Date: 2022-06-01 09:03:23
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-03 22:55:04
 * @FilePath: /vue3-crm/src/store/modules/user.ts
 * @Description: 
 */

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
