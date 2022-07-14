import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// 在入口文件中引入基本样式
import './assets/style/reset.css'
const app=createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
