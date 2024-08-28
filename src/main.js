import { ref, createApp, computed, onMounted } from 'vue'
import { createVuetify } from 'vuetify'
import router from './router/index.js'
// import { createPinia } from 'Pinia'
import Layout from './layout/index.js'
import Intoduction from './pages/intoduction.js'

// const pinia = createPinia()
const vuetify = createVuetify()

export const app = createApp({})

app.use(router)
app.use(vuetify)
// app.use(pinia)
app.component('layout', Layout);

app.mount('#app')