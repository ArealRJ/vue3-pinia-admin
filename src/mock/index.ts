import Mock from "mockjs"
import config from "@/config";

const responseData = (data: any) => {
  return {
    code: 200,
    msg: 'ok',
    data: data
  }
}


/**
 * @登录
 */
Mock.mock('http://localhost:3000/api/user/login', 'post', (options: { body: any }) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === "123456") {
    return responseData({ username: username })
  } else {
    return '登录失败'
  }
})