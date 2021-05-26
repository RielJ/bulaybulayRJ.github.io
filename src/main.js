import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/css/main.css"
import router from './router'

const vue = createApp(App)
  .use(router)


vue.mount('#app')
