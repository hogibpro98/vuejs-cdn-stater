import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const App =  { template: '<div><h1>Home</h1><p>This is home page1</p></div>' }
const App2 =  { template: '<div><h1>Home</h1><p>This is home page25</p></div>' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        components: {
            default: App,
        },
    },
    {
        path: '/speech',
        components: {
            default: App2,
        },
    },
    {
        path: '/global',
        components: {
            default: App2,
        },
    },
    {
        path: '/global',
        components: {
            default: App2,
        },
    },
    {
        path: '/global',
        components: {
            default: App2,
        },
    },
  ],
})

export default router