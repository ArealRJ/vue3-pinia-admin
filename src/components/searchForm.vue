<template>
  <div class="searchHeader">
    <div class="line">
      <template v-for="item in formItems">
        <template v-if="item.type == 'input'">
          <el-input
            v-model:value="formData[`${item.field}`]"
            :placeholder="item.placeholder"
            :style="item.styleObj"
            :class="[`${item.className}`]"
          ></el-input>
        </template>
        <template v-else-if="item.type == 'select'">
          <el-select
            v-model:value="formData[`${item.field}`]"
            :clearable="true"
            :style="item.styleObj"
            :class="[`${item.className}`]"
            :placeholder="item.placeholder"
          >
          <el-option
          v-for="(option,index) in item.options"
          :key="index"
          v-model:value="option.value"
          :label="option.label"
          >

          </el-option>
          </el-select>
        </template>
        <template v-else-if="item.type == 'datePicker'">
          <el-date-picker
            :valueFormat="item.format"
            :style="item.styleObj"
            :class="[`${item.className}`]"
            v-model:value="formData[`${item.field}`]"
            :format="item.format"
            :placeholder="item.placeholder"
          >
          </el-date-picker>
        </template>
      </template>
      <el-button @click="search" class="searchBtn ml10 mr10 mt5" type="primary">
        查询
      </el-button>
    </div>
  </div>
  <!-- <div class=""> -->
    <!-- <a-button type="primary"></a-button> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import {formItem} from '../@types/interface'

const emit = defineEmits(["update:formData", "search"]);
const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
  formItems: {
    type: Array<formItem>,
    required: true,
    default: () => [],
  },
});
const search = () => {
  emit("search");
};
</script>

<style lang="less" scoped>
.searchHeader {
  width: 930px;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: flex-start;
  flex-direction: column;
}
</style>
