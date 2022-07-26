/*
 * @Author: RenJie
 * @Date: 2022-04-08 21:56:44
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-01 09:32:21
 * @FilePath: /vue3-crm/src/shims-vue.d.ts
 * @Description: 
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json'

declare module '@'

declare module "mockjs"