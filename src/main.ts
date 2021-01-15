import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { ChatRecordsDao } from "@/database/dao/ChatRecordsDao";

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)





let a = ChatRecordsDao.getInstance()
