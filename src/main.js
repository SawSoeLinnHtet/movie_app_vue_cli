import { createApp } from 'vue'
import { createPinia } from "pinia"
import nProgress from 'nprogress'
import App from './App.vue'
import router from "./router"

import('./assets/css/main.css')
import 'nprogress/nprogress.css'

nProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 800
})

const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .use(nProgress)
  .mount("#app")

