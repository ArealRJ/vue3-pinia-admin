<template>
  <div class="page-header">
    <comIcon :icon="icon" :size="30" @click="handleFold" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {sideBarStatus} from "@/@types/interface"

import comIcon from "../com-icon.vue";

const icon = ref<sideBarStatus>("Fold");
const emit = defineEmits(["foldChange"]);
const handleFold = () => {
  icon.value === "Fold" ? (icon.value = "Expand") : (icon.value = "Fold");
  emit("foldChange", icon.value);
};
</script>

<style scoped></style>
