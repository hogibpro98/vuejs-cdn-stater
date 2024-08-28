import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Intoduction from '../pages/intoduction.js'

const App =  { template: '<div><h1>Home</h1><p>This is home page1</p></div>' }
const App2 =  { template: '<div><h1>Home</h1><p>This is home page25</p></div>' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        components: {
            default: Intoduction,
        },
    },
    {
        path: '/component',
        components: {
            default: App2,
        },
    },
    {
        path: '/pinia',
        components: {
            default: App2,
        },
    },
    {
        path: '/axios',
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