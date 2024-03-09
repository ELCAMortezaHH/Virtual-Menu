<script lang="ts" setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import DataTable from "primevue/datatable"
import Button from "primevue/button"
import Column from "primevue/column"
import orderStore from "@/store/client/orderStore"

const router = useRouter()

const basketTotal = computed(() => {
    var calculatedPrice = 0
    orderStore().order.forEach((item) => {
        calculatedPrice += item.price * item.count
    })
    return calculatedPrice
})
</script>
<template>
    <div v-if="orderStore().order.length" class="card">
        <div class="data-table-header">
            <h5>Cart</h5>
            <h5 class="basket-total">Basket total: {{ basketTotal }}</h5>
        </div>

        <DataTable :value="orderStore().order" :paginator="false" responsiveLayout="scroll">
            <Column style="width: 15%">
                <template #header> Image </template>
                <template #body="slotProps">
                    <img
                        :src="slotProps.data.image"
                        :alt="slotProps.data.image"
                        width="90"
                        class="shadow-2"
                        style="border-radius: 12px"
                    />
                </template>
            </Column>
            <Column field="name" header="Name" style="width: 30%">
                <template #body="slotProps"> {{ slotProps.data.title }} </template>
            </Column>
            <Column field="price" header="Price" :sortable="true" style="width: 30%">
                <template #body="slotProps"> {{ slotProps.data.price }} </template>
            </Column>
            <Column field="count" header="Count" :sortable="true" style="width: 25%">
                <template #body="slotProps"> {{ slotProps.data.count }} </template>
            </Column>
        </DataTable>
    </div>
    <div v-else class="card">
        <h5>You have no items in your cart!</h5>
        <Button label="Visit menu" type="button" class="p-button-raised action" @click="router.push('/menu')" />
    </div>
</template>
<style lang="scss" scoped>
.data-table-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0 20px 0;
    h5 {
        margin: auto 0 auto 0;
    }
    .basket-total {
        margin-left: auto;
    }
}
.action {
    margin: 10px auto auto 10px;
}
</style>
