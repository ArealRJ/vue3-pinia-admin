import Axios from "@/service/index"

export const login = async (params:any) => {
  return await Axios.post({
    url:'/api/user/login',
    data:params
  })
}
