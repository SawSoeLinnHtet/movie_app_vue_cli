import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/HomeView"
import About from "@/views/AboutView"
import Details from "@/components/movies/MovieDetails"

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
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
