// main.js
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const head = createHead() // ← Create the head instance

app.use(head) // ← Register it as a plugin
app.mount('#app')