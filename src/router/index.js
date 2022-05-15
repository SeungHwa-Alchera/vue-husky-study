import Vue from 'vue'
import VueRouter from 'vue-router'
import WidthTest from '@/view/WidthTest.vue'

Vue.use(VueRouter)

const routes = [{ path: '/', component: WidthTest }]

const router = new VueRouter({
  routes,
})

export default router
