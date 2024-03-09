<script setup>
import { onMounted, ref } from "vue"

import AppMenuItem from "./AppMenuItem.vue"

const model = ref([
    {
        label: "Menu",
        items: [
            { label: "Menu", icon: "pi pi-fw pi-th-large", to: "/menu" },
            { label: "User profile", icon: "pi pi-fw pi-info-circle", to: "/menu/userprofile" },
            { label: "Cart", icon: "pi pi-fw pi-shopping-cart", to: "/menu/cart" },
        ],
    },
    {
        label: "Manager",
        items: [
            { label: "Manager", icon: "pi pi-fw pi-lock-open", to: "/manager" },
            { label: "App customization", icon: "pi pi-fw pi-clone", to: "/manager/app-customization" },
            { label: "User management", icon: "pi pi-fw pi-user-edit", to: "/manager/user-management" },
            { label: "Product management", icon: "pi pi-fw pi-file-edit", to: "/manager/product-management" },
        ],
    },
    {
        label: "Barista",
        items: [{ label: "Barista", icon: "pi pi-fw pi-users", to: "/barista" }],
    },
])
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item class="menu-header" v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
