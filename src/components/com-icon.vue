<template>
  <el-icon :size="size" :color="color">
    <component class="el-icon" :is="icon" />
  </el-icon>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "tools",
  },
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: "#000000",
  },
});
</script>

<style scoped></style>
