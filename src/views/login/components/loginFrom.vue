<template>
  <div class="'login">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watchEffect, watch } from "vue";
import localCache from "@/utils/cache";
const props = defineProps({
  account: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["update:account"]);
const rules = {
  name: [
    {
      required: true,
      message: "用户名是必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是6-10个字母或数字",
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
};

const formRef = ref();

watch(props.account, () => {
  emit("update:account");
});
defineExpose({
  formRef,
});
</script>

<style lang="scss" scoped></style>
