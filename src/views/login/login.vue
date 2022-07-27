<template>
  <div class="login">
    <LoginBackground />
    <div class="login-box">
      <el-tabs
        type="border-card"
        @tab-change="handleTabChange"
        stretch
        v-model="currentTab"
      >
        <el-tab-pane name="login">
          <template #label>
            <span class="login-tab">
              <i class="iconfont">&#xe70a;</i>&nbsp;&nbsp;登录
            </span>
          </template>
          <LoginForm ref="loginFormRef" v-model:account="account" />
        </el-tab-pane>
      </el-tabs>
      <div class="account-control">
        <el-checkbox style="color:#000">记住密码</el-checkbox>
        <el-link style="color:#000">?忘记密码</el-link>
      </div>
      <div class="account-button">
        <div v-if="isLogin">
          <el-button
            class="login-button"
            type="primary"
            @click="handleLoginClick"
            >立即登录</el-button
          >
        </div>
        <div v-else>
          <el-button class="register-button" type="primary">立即注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import router from "@/router";
import useStore from "@/store/index";
import LoginBackground from "./components/loginBackground.vue";
import LoginForm from "./components/loginFrom.vue";

import { login } from "@/api";
const { user } = useStore();
const loginFormRef = ref<InstanceType<typeof LoginForm>>();
const isLogin = ref(true);
const currentTab = ref<string>("login");
const handleTabChange = () => {
  isLogin.value = !isLogin.value;
};
const account = reactive({
  name:'',
  password:''
});
// 登录
const handleLoginClick = () => {
  // console.log(loginFormRef.value);
  loginFormRef.value?.formRef.validate((valid: boolean) => {
    if (valid) {
      login({
        username:account.name,
        password:account.password
      }).then(res=>{
        console.log(res);
        router.push("/main");
        console.log('登陆成功');
      })
      // console.log(account);
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    background-color: #fff;
    padding: 0 10px 5px 10px;
    opacity: 0.9;
    display: inline-block;
    position: absolute;
    width: 350px;
    border-radius: 10px;
    // box-shadow: 0px 0 2px 3px #010101;
    .login-tab,
    .register-tab {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .account-control {
      display: flex;
      justify-content: space-between;
    }
    .account-button {
      .login-button,
      .register-button {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
