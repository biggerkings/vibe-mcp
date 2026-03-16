import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式
import './styles/global.scss'

const app = createApp(App)

// 使用路由
app.use(router)

app.mount('#app')
