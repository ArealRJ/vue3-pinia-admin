<template>
  <div class="layout">
    <el-container class="main">
      <el-aside
        class="page-left"
        :width="foldStatus == 'Fold' ? '200px' : '50px'"
      >
        <div class="menu">
          <MyMenu></MyMenu>
        </div>
      </el-aside>
      <el-container>
        <el-header><MyHeader @foldChange="handleFoldChange"/></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import type {sideBarStatus} from "@/@types/interface"

import MyMenu from "@/components/myMenu/index.vue";
import MyHeader from "@/components/myHeader/index.vue";

const foldStatus = ref<sideBarStatus>("Fold");
/**
 * @menu状态改变
 */
const handleFoldChange = (value: sideBarStatus) => {
  foldStatus.value = value;
};
</script>

<style scoped lang="scss">
@import "../assets/style/element.scss";
.layout {
  width: 100%;
  height: 100%;
  .main {
    height: 100%;
    .page-left {
      // height: 100%;
      // background-color;
      background-color: rgba(156, 163, 175);
      // height:100%;
    }
  }
}
.el-aside {
  transition: width 0.3s linear;
}
</style>
