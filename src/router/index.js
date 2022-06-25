import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store';

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
    path: '/analytics',
    name: 'AnalyticsView',
    component: () => import('../views/AnalyticsView.vue'),
    meta: {
      title: "Аналитика",
      auth: true
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

  const requireAuth = to.matched.some(record => record.meta.auth)
  const isUserAuth = store.getters.getData

  if (requireAuth && !isUserAuth) {
    next('/')
    console.log(isUserAuth)
  } else {
    next()
  }

})

export default router
