import Mock from "mockjs"
import config from "@/config";
import { responseType } from "@/@types/interface"

const responseData = (data: any): responseType => {
  return {
    code: 200,
    msg: 'ok',
    data: data
  }
}


/**
 * @登录
 */
Mock.mock(config.baseUrl + '/api/user/login', 'post', (options: { body: any }) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === "123456") {
    return responseData({ username: username })
  } else {
    alert('用户名密码错误')
  }
})