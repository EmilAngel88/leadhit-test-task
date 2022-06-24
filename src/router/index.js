import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Авторизация",
    },
  },
  {
    path: '/graphic',
    name: 'GraphicView',
    component: () => import('../views/GraphicView.vue'),
    meta: {
      title: "Аналитика",
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  document.title = to.meta.title ? to.meta.title : "Нет такой страницы"

  next()
})

export default router
