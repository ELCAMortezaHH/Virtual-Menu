import { createRouter, createWebHistory } from "vue-router"
import AppLayout from "@/layout/AppLayout.vue"
import Home from "@/pages/Home.vue"
import Menu from "@/pages/Menu.vue"
import UserProfile from "@/pages/UserProfile.vue"
import Cart from "@/pages/Cart.vue"

import NotFound from "@/pages/NotFound.vue"

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/menu",
        component: AppLayout,
        children: [
            {
                path: "/menu",
                component: Menu,
            },
            {
                path: "/menu/userprofile",
                component: UserProfile,
            },
            {
                path: "/menu/cart",
                component: Cart,
            },
        ],
    },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
