import { createApp } from 'vue'
import App from './App.vue'
import '@/mock'
import 'normalize.css'
import './assets/style/base.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import Calendar from 'mpvue-calendar'

import { createPinia } from 'pinia'
import router from './router/index'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$dayjs = dayjs

app.use(createPinia())
.use(router)
.mount('#app')
