<script lang="ts" setup>
import { ref, computed, onMounted } from "vue"
import categoryCard from "@/components/categoryCard.vue"
import MenuItemCard from "@/components/menuItemCard.vue"
import menuStore from "@/store/menuStore.ts"
import setMenuData from "@/data/menuData"
import productItemObject from "@/types/productItemObject"

const selectedCategory = ref(1)

const selectedCategoryItems = computed<productItemObject[]>(() => {
    return menuStore().productItems.filter((x: productItemObject) => x.categoryId === selectedCategory.value)
})

onMounted(() => {
    setMenuData()
})
</script>
<template>
    <div class="menu-category-container">
        <categoryCard
            v-for="item in menuStore().categoryItems"
            :key="item.id"
            :value="item"
            :selected="selectedCategory === item.id ? true : false"
            @click="selectedCategory = item.id"
        />
    </div>
    <div class="menu-item-container">
        <MenuItemCard v-for="item in selectedCategoryItems" :key="item.id" :value="item" />
    </div>
</template>
<style lang="scss" scoped>
.menu-category-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 10px 0 20px 0;
    overflow-x: auto;
    border-top: 1px solid var(--text-color);
    border-bottom: 1px solid var(--text-color);
}
.menu-item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
@/types/productItemObject
