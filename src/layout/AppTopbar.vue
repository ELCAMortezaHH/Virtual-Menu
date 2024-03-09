<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { useLayout } from "@/layout/composables/layout"
import { useRouter } from "vue-router"
import orderStore from "@/store/client/orderStore"
import Badge from "primevue/badge"

const { layoutConfig, onMenuToggle } = useLayout()

const outsideClickListener = ref(null)
const topbarMenuActive = ref(false)
const router = useRouter()

onMounted(() => {
    bindOutsideClickListener()
})

onBeforeUnmount(() => {
    unbindOutsideClickListener()
})

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? "logo-white" : "logo-dark"}.svg`
})

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value
}
const topbarMenuClasses = computed(() => {
    return {
        "layout-topbar-menu-mobile-active": topbarMenuActive.value,
    }
})

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false
            }
        }
        document.addEventListener("click", outsideClickListener.value)
    }
}
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener("click", outsideClickListener)
        outsideClickListener.value = null
    }
}
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return

    const sidebarEl = document.querySelector(".layout-topbar-menu")
    const topbarEl = document.querySelector(".layout-topbar-menu-button")

    return !(
        sidebarEl.isSameNode(event.target) ||
        sidebarEl.contains(event.target) ||
        topbarEl.isSameNode(event.target) ||
        topbarEl.contains(event.target)
    )
}
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img class="logo" src="@/assets/Ali baba logo.jpg" alt="Ali baba" />
            <span>Ali baba</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="router.push('/menu/cart')" class="p-link layout-topbar-button">
                <i class="pi pi-shopping-cart"></i>
                <span>Cart</span>
            </button>
            <Badge
                v-if="orderStore().order.length"
                :value="orderStore().order.length"
                severity="danger"
                class="cart-badge"
            ></Badge>
            <!-- <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    height: 60px !important;
    width: 60px !important;
    border-radius: 50% !important;
}
.cart-badge {
    position: absolute;
    right: 20px;
}
</style>
