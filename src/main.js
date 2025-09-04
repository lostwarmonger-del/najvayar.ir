// main.js
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia'  // Import Pinia
import router from './routes'
const pinia = createPinia()

const app = createApp(App)
const head = createHead() // ← Create the head instance
app.use(router)
app.use(head) // ← Register it as a plugin
app.use(pinia) // ← Register Pinia
app.mount('#app')