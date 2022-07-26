import { createApp } from 'vue'
import App from './App.vue'
import '@/mock'
import 'normalize.css'
import './assets/style/base.scss'

import { createPinia } from 'pinia'
import router from './router/index'


const app = createApp(App)

app.use(createPinia())
app.use(router).mount('#app')
