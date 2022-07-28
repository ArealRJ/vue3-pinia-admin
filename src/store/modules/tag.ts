import { defineStore } from "pinia";

import {tag} from "@/@types/interface"


const useTagStore = defineStore("tag", {
  state: ():any => {
    return {
      list: []
    }
  },
  getters: {},
  actions: {
    delTagItem(index:number){
      this.list.splice(index,1)
    },
    setTagItem(data:tag){
      this.list.push(data)
    }
  }
})

export default useTagStore;