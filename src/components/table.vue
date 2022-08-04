<template>
  <div class="my-table">
    <!-- <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div> -->
    <el-table
      :data="tableList"
      border
      style="width: 100%"
      @selection-change="handleTableSelect"
      v-bind="childrenProps"
    >
      <!-- selection列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <!-- index列 -->
      <el-table-column
        v-if="showIndexProp"
        type="index"
        align="center"
        width="60"
        label="序号"
      ></el-table-column>
      <!-- 用户自定义列  -->
      <template v-for="propItem in columnList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <!-- 插槽,可以对对应prop的的数据进行修改 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
          
    </el-table>
    <div class="footer" v-if="showFooter">
      <el-pagination
        :currentPage="page.currentPage"
        :page-size="page.pageSize"
        :page-sizes="[10, 20, 30]"
        small="small"
        background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  tableList: {
    type: Array,
    required: true,
  },
  listCount: {
    type: Number,
    default: 0,
  },
  columnList: {
    type: Array<any>,
    required: true,
  },
  showIndexProp: {
    type: Boolean,
    default: false,
  },
  showSelectColumn: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 1,
      pageSize: 10,
    }),
  },
  childrenProps: {
    type: Object,
    default: () => ({}),
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["selectionChange", "update:page"]);

const handleTableSelect = (value: any) => {
  console.log(value);
  emit("selectionChange", value);
};
const handleCurrentChange = (currentPage: number) => {
  emit("update:page", { ...props.page, currentPage });
};
const handleSizeChange = (pageSize: number) => {
  emit("update:page", { ...props.page, pageSize });
};
</script>

<style scoped lang="scss">
.my-table {
  margin-top: 20px;
  .el-table .el-table__cell {
    position: static !important;
  }
  .header {
    display: flex;
    padding: 5px 5px;
    justify-content: space-between;
    height: 30px;
    .title {
      font-weight: bold;
      font-size: 18px;
    }
    .handler {
      align-items: center;
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
