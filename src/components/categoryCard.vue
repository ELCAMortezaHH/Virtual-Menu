<script setup lang="ts">
import categoryItemObject from "@/types/categoryItemObject.ts"

interface props {
    value: categoryItemObject
    selected: boolean
}
const props = defineProps<props>()
</script>

<template>
    <div class="category-card-container" :class="{ selected: props.selected }">
        <img :src="props.value.image" alt="" class="category-image" />
        <p class="category-title">{{ props.value.title }}</p>
    </div>
</template>

<style scoped lang="scss">
.category-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--surface-card);
    border: 1px solid var(--surface-border);
    border-radius: 12px;
    margin: 5px 10px;
    width: 110px;
    height: 160px;
    cursor: pointer;
    &.selected {
        box-shadow: var(--focus-ring);
    }
    .category-image {
        width: 100px;
        border-radius: 8px;
        margin: 5px 5px 0 5px;
    }
    .category-title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        width: 100%;
        font-size: 1.1rem;
        margin: 0 0 auto 0;
        padding: 3px;
    }
}

@media screen and (max-width: 768px) {
    .category-card-container {
        margin: 5px 7px;
        width: 90px;
        height: 135px;
        .category-image {
            width: 80px;
        }
        .category-title {
            font-size: 1rem;
        }
    }
}
</style>
