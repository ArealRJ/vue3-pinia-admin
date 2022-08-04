<template>
  <div class="page-template">
    <div class="title">
      <div class="tag"></div>
      <div class="titleName">综合统计</div>
    </div>
    <div class="home">
      <div class="dateBox">
        <Calendar
          :selectDate="selectDate"
          backgroundText
          class-name="select-mode"
          :remarks="remarks"
        />
      </div>
      <div class="technologyStack">
        <div>
          技术列表
        </div>
        <ul>
          <template v-for="item in technologyArray">
            <li>
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Calendar from "mpvue-calendar";
import dayjs from "dayjs";

const remarks = ref({ "2022-7-29": "111" });

const today = dayjs(new Date().getTime()).format("YYYY-MM-DD");

const selectDate = ref(today);
// console.log(selectDate.value);

const technologyArray = [
  {
    url: "https://staging-cn.vuejs.org/",
    name: "Vue3",
  },
  {
    url:'https://router.vuejs.org/zh/',
    name:'vue-router'
  },
  {
    url:'https://pinia.web3doc.top/',
    name:'pinia'
  },
  {
    url:'https://element-plus.gitee.io/zh-CN/',
    name:'element-plus'
  },
  {
    url:'https://www.typescriptlang.org/',
    name:'TypeScript'
  }
];
</script>

<style scoped lang="scss">
.home {
  display: flex;
  .dateBox {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    justify-content: center;
  }
}
</style>
