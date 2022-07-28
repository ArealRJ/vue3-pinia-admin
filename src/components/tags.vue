<template>
  <div class="tags">
    <ul class="tagList">
      <template v-for="(item, index) of tag.list">
        <li class="tagItem ml5" :class="{ active: isActive }">
          <span>{{item.title}}</span>
          <comIcon icon="Close" :size="10" @click="close" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import comIcon from "./com-icon.vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import useTagStore from "@/store/modules/tag";

const tag = useTagStore();

const route = useRoute();
console.log(route);

const setTags = (route: any) => {
  const isExist = tag.list.some((item: any) => {
    return item.id === route.meta.id;
  });
  if (isExist) {
    tag.setTagItem({
      name: route.name,
      title: route.meta.title,
      path: route.path,
    });
  }
};

setTags(route);
onBeforeRouteUpdate((to) => {
  console.log("to:",to);
  setTags(to);
});

const isActive = () => {};

const close = () => {
  console.log("close");
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e8e8e8;
  .tagList {
    display: flex;
    align-items: flex-end;
    margin: 10px 0 0 -20px;
  }
  .tagItem {
    list-style-type: none;
    border: 1px solid #000;
    border-bottom: none;
    width: 60px;
    height: 20px;
    line-height: 20px;
    // text-align: center;
    font-size: 8px;
    font-weight: 300;
    border-radius: 3px 3px 0 0;
    cursor: pointer;
  }
}
</style>
