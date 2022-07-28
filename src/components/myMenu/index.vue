<template>
  <div class="sidebar">
    <div class="logo">
      <img class="logoImg" src="../../assets/imgs/logo.png" alt="" />
      <span class="title">后台管理</span>
    </div>
    <el-menu
      :default-active="onRoutes"
      class="sidebar-el-menu"
      :collapse="isCollapse"
      mode="vertical"
    >
      <template v-for="item in menuList" :key="item.title">
        <!-- 一级菜单 -->
        <template v-if="item.type && item.type === 1">
          <!-- 一级菜单标题 -->
          <el-sub-menu :index="item.meta.key">
            <template #title>
              <comIcon :icon="item.meta.icon" :size="20" />
              <span>{{ item.meta.title }}</span>
            </template>
            <!-- 一级菜单子菜单 -->
            <template v-for="subItem in item.children" :key="subItem.meta.key">
              <el-menu-item
                :index="subItem.meta.key"
                @click="handleItemClick(subItem)"
              >
                <span class="menuChildItemTitle">{{ subItem.meta.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 二级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.meta.key + ''">
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
        <!-- 一级菜单没有子菜单 -->
        <template v-else>
          <el-menu-item :index="item.meta.key">
              <comIcon :icon="item.meta.icon" :size="20" />
            <template #title>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!-- </el-col>s -->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { getMenuDataFromRouter } from "@/utils/index";
import routes from "@/router/route";
import { useRoute } from "vue-router";

import comIcon from "../com-icon.vue";

const menuList = getMenuDataFromRouter(routes);

const isCollapse = ref(false);

console.log(menuList);
const handleItemClick = (item: any) => {};

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
</script>

<style scoped lang="scss">
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
}
.logo {
  margin-top: 20px;
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  // justify-content: flex-start;
  align-items: center;
  .title{
    display: flex;
    justify-content: center;
  }
  .logoImg {
    width: 44px;
    height: 44px;
  }
}
</style>
