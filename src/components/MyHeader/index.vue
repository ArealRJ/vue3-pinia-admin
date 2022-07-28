<template>
  <div class="page-header">
    <div class="header-left">
      <comIcon :icon="icon" :size="30" @click="handleFold" />
    </div>
    <div class="header-right">
      <comIcon icon="BellFilled" :size="30" />
      <div class="avatar ml10">
        <el-dropdown>
          <el-avatar :size="50" :src="avatarUrl" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><span>我的信息</span></el-dropdown-item>
              <el-dropdown-item><span>退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {sideBarStatus} from "@/@types/interface"
import {getUserInfo} from "@/api"

import comIcon from "../com-icon.vue";



const avatarUrl = ref('')

getUserInfo().then((res:any)=>{
  // console.log(res);
  avatarUrl.value = res.data.url
  console.log(avatarUrl.value);
})



/**
 * @menu状态改变
 */
const icon = ref<sideBarStatus>("Fold");
const emit = defineEmits(["foldChange"]);
const handleFold = () => {
  icon.value === "Fold" ? (icon.value = "Expand") : (icon.value = "Fold");
  emit("foldChange", icon.value);
};
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  .header-right {
    display: flex;
    align-items: center;
    .avatar {
      cursor: pointer;
    }
  }
}
</style>
