<template>
  <div class="layout">
    <el-container class="main">
      <el-aside
        class="page-left"
        :width="foldStatus == 'Fold' ? '200px' : '50px'"
      >
        <div class="menu">
          <MyMenu :isCollapse="isCollapse"></MyMenu>
        </div>
      </el-aside>
      <el-container class="page-right">
        <el-header class="header"><my-header @foldChange="handleFoldChange"/></el-header>
        <el-main>
          <div><myTag /></div>
          <div class="page-content">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import type {sideBarStatus} from "@/@types/interface"

import MyMenu from "@/components/myMenu/index.vue";
import myHeader from "../components/MyHeader/index.vue";
import myTag from "../components/tags.vue"

/**
 * @menu状态改变
 */
const foldStatus = ref<sideBarStatus>("Fold");
const isCollapse = ref<boolean|undefined>(false)
const handleFoldChange = (value: sideBarStatus) => {
  if(value === "Fold"){
    isCollapse.value = false;
  }else if (value === "Expand"){
    isCollapse.value = true;
  }
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
    .page-right{
      .header{
          background-color: #1881ff;
          height: 70px;
      }
      .page-content{
        height: 700px;
      }
    }
  }
}
.el-aside {
  transition: width 0.3s linear;
}
</style>
