import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/HomeView"
import About from "@/views/AboutView"
import Details from "@/components/movies/MovieDetails"
import Genres from "@/views/GenresView"
import axios from "axios"
import NProgress from "nprogress"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/details/:movie_id",
    component: Details,
    props: true,
  },
  {
    path: "/genres",
    component: Genres,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})
axios.interceptors.request.use(
  function (config) {
    NProgress.start()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default router
