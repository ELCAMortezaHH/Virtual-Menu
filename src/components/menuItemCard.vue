<script lang="ts" setup>
import { useRouter } from "vue-router"
import Button from "primevue/button"
import InputNumber from "primevue/inputnumber"
import productItemObject from "@/types/productItemObject.ts"

interface props {
    value: productItemObject
}
const props = defineProps<props>()

const router = useRouter()
</script>
<template>
    <div class="item-card">
        <img
            class="image"
            :src="props.value.image"
            alt="Ali baba"
            @click="router.push('/menu/item/' + props.value.id)"
        />
        <div class="item-info">
            <p class="title">{{ props.value.title }}</p>
            <p class="duration">{{ props.value.duration }} دقیقه</p>
            <p class="price">{{ props.value.price.toLocaleString() }} تومان</p>
        </div>
        <Button
            class="add-to-cart-button"
            v-if="!props.value.count && props.value.avalable"
            icon="pi pi-cart-plus"
            @click="props.value.count = 1"
        />
        <div class="order-count" v-show="props.value.count >= 1 && props.value.avalable">
            <Button icon="pi pi-plus" aria-label="Add" @click="props.value.count += 1" />
            <InputNumber class="input-number" v-model="props.value.count" :min="0" :max="15" />
            <Button
                :icon="`pi ${props.value.count >= 2 ? 'pi-minus' : null} ${
                    props.value.count === 1 ? 'pi-times' : null
                }`"
                v-if="props.value.count >= 1"
                aria-label="Minus"
                severity="danger"
                @click="props.value.count -= 1"
            />
        </div>
        <div class="availability" v-if="!props.value.avalable">
            <div class="gap-filler"></div>
            <div class="text-container">
                <p>عدم موجودی</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item-card {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 15px;
    height: 150px;
    min-width: 370px;
    max-width: 450px;
    flex-grow: 1;
    background: var(--surface-card);
    border: 1px solid var(--surface-border);
    border-radius: 12px;
    .image {
        width: 140px;
        margin: 5px 15px 5px 5px;
        border: 1px solid var(--surface-border);
        border-radius: 8px;
        cursor: pointer;
    }
    .item-info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin: 0 auto 0 0;
        height: 100%;
        max-width: 150px;
        .title {
            display: flex;
            height: 40px;
            width: 100%;
            font-size: 1.3rem;
            font-weight: bold;
            margin: 20px 0 0 0;
        }
        .duration {
            margin: 25px 0 5px 0;
            font-size: 0.95rem;
            font-weight: bold;
            opacity: 0.6;
        }
        .price {
            margin: 0;
            font-size: 1.1rem;
            font-weight: bold;
            opacity: 0.9;
        }
    }
    .add-to-cart-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 15px auto 0;
        width: 40px;
    }
    .order-count {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto 15px auto 0;
        width: 40px;
        :deep {
            .p-inputnumber-input {
                width: 45px;
                text-align: center;
            }
        }
    }
    .availability {
        height: 100%;
        width: 55px;
        .gap-filler {
            height: 0;
            width: 0;
        }
        .text-container {
            position: absolute;
            display: flex;
            justify-content: end;
            align-items: start;
            height: 100%;
            width: 150px;
            right: 0;
            padding: 25px 12px;
            background: var(--highlight-bg);
            color: var(--text-color);
            border-radius: 0 11px 0 0;
            font-size: 1rem;
            font-weight: bold;
            clip-path: polygon(100% 0, 0 0, 100% 60%);
            p {
                rotate: 31deg;
                background: none;
                background-color: none;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .item-card {
        height: 130px;

        .image {
            width: 120px;
        }
        .item-info {
            .title {
                margin: 15px 0 0 0;
            }
            .duration {
                margin: 15px 0 5px 0;
            }
        }
        .availability {
            .text-container {
                padding: 20px 10px;

                p {
                    rotate: 28deg;
                }
            }
        }
    }
}
</style>
@/types/productItemObject
