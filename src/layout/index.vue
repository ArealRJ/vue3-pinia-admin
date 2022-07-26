<!--
 * @Author: RenJie
 * @Date: 2022-04-19 10:17:32
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-01 11:21:14
 * @FilePath: /vue3-crm/src/layout/index.vue
 * @Description: 
-->
<template>
  <div class="layout">
    <el-container class="main">
      <el-aside class="page-left" width="200px">
        <div class="logo">
          <img class="logoImg" src="../assets/imgs/logo.png" alt="" />
          <span class="title text-xl font-bold">vue3-crm</span>
        </div>
        <div class="menu center">
          <MyMenu></MyMenu>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

import { defineComponent } from "vue";
import MyMenu from "@/components/myMenu/index.vue";
// console.log(menu);


</script>



<style scoped lang="scss">
@import "../assets/style/element.scss";
.layout {
  width: 100%;
  height: 100%;
  .main{
    height:100%;
    .page-left {
    // height: 100%;
    // background-color;
    background-color: rgba(156, 163, 175);
    // height:100%;
    .logo {
      margin-top: 20px;
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 10px;
      flex-direction: row;
      // justify-content: flex-start;
      align-items: center;
      .logoImg {
        width: 44px;
        height: 44px;
      }
    }
  }
  }
  
}
</style>
