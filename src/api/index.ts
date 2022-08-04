import Axios from "@/service/index"

export const login = async (params:any) => {
  return await Axios.post({
    url:'/api/user/login',
    data:params
  })
}

export const getUserInfo = async()=>{
  return await Axios.get({
    url:'/api/user/info',
  })
}


export const getUserPage = async () => {
  return await Axios.get({
    url:'/api/user/page'
  })
}