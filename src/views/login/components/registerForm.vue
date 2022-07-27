<template>
  <div>
    <el-form :model="registerInfo" :rules="rules">
      <el-form-item label="账&nbsp;&nbsp;&nbsp;号" prop="account">
        <el-input v-model="registerInfo.account"></el-input>
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
        <el-input
          type="password"
          v-model="registerInfo.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="姓&nbsp;&nbsp;&nbsp;名" prop="name">
        <el-input v-model="registerInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="邮&nbsp;&nbsp;&nbsp;箱" prop="email">
        <el-input v-model="registerInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="registerInfo.mobile"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
const registerInfo = reactive({
  account: "",
  password: "",
  email: "",
  name: "",
  mobile: "",
});
const rules = {
  account: [
    {
      required: true,
      message: "账号是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: "用户名必须是6-10个字母或数字",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "姓名是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
      message: "",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: "密码必须是6位以上字母和数字",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "邮箱是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "请输入正确邮箱",
      trigger: "blur",
    },
  ],
  mobile: [
    {
      required: true,
      message: "手机号是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      message: "请输入正确手机号",
      trigger: "blur",
    },
  ],
};
</script>

<style lang="scss" scoped></style>
