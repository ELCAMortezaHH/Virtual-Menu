import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"
import PrimeVue from "primevue/config"
import "primeicons/primeicons.css"
import "@/style.scss"
import "@/assets/styles.scss"
import App from "@/App.vue"
import router from "@/router/routes.ts"

const pinia = createPinia()
const app = createApp(App)
app.use(router)
pinia.use(piniaPersist)
app.use(pinia)
app.use(PrimeVue)
app.mount("#app")
