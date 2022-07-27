<template>
  <div>
    <el-col :span="12">
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <template v-for="item in menuList" :key="item.title">
          <!-- 二级菜单 -->
          <template v-if="item.type === 1">
            <!-- 二级菜单标题 -->
            <el-sub-menu :index="item.title">
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <!-- 二级菜单子菜单 -->
              <template v-for="subItem in item.children" :key="subItem.title">
                <el-menu-item
                  :index="subItem.title"
                  @click="handleItemClick(subItem)"
                >
                  <span>{{ subItem.title }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>

          <!-- 一级菜单 -->
          <template v-else-if="item.type === 2">
            <el-menu-item :index="item.id + ''">
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMenuDataFromRouter } from "@/utils/index";
import routes from "@/router/route";
export default defineComponent({
  setup() {
    // console.log(routes);
    const routsList = routes;
    const menuList = getMenuDataFromRouter(routsList);
    console.log(menuList);
    const handleItemClick = (item: any) => {};
    return {
      menuList,
      handleItemClick,
    };
  },
});
</script>

<style scoped></style>
