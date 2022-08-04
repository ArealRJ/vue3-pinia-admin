<template>
  <div class="page-template">
    <div class="page-title">
      <div class="tag"></div>
      <div class="titleName">用户管理</div>
    </div>
    <div class="page-content">
      <SearchForm
        v-model:formData="formData"
        :formItems="formItems"
        @search="search"
      />
      <div class="table-box">
        <Table
          v-model:tableList="tableList"
          v-model:columnList="columnList"
          :showIndexProp="true"
          :showFooter="true"
        >
          <template #handler>
            <a class="operation">编辑</a>
            <el-divider direction="vertical" />
            <a class="operation">删除</a>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from "vue";
import SearchForm from "@/components/searchForm.vue";
import Table from "@/components/table.vue";
import {getUserPage} from "@/api"

const formData = reactive({
  vague: undefined,
});
const formItems = reactive([
  {
    field: "vague",
    type: "input",
    placeholder: "请输入用户名",
    className: "",
    styleObj: {
      width: "200px",
    },
  },
]);

const search = () => {
  console.log("搜索");
};

const columnList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "120" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "200",
    slotName: "createAt",
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "200   ",
    slotName: "updateAt",
  },
  {
    label: "操作",
    slotName: "handler",
    minWidth: "120",
  },
];
  /**
   * @表格数据
   */
  let tableList = ref([]);
  const getData = ()=>{
    getUserPage().then((res:any)=>{
    tableList.value = res.userList
  })
  }
  onMounted(()=>{
    getData()
  })
</script>

<style scoped lang="scss">
.table-box{
width: 98%;

.operation{
  color:cornflowerblue;
  cursor: pointer;
}
}


</style>
