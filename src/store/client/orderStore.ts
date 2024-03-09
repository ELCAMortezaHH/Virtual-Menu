import { defineStore } from "pinia"
import { computed } from "vue"
import menuItemObject from "@/types/productItemObject"
import menuStore from "@/store/menuStore"

const orderStore = defineStore("order", () => {
    const order = computed<menuItemObject[]>(() => {
        return menuStore().productItems.filter((x) => x.count >= 1)
    })

    const orderTotalPrice = computed(() => {
        if (!order.value) return 0

        var price = 0
        for (let index = 0; index < order.value.length; index++) {
            price += order.value[index].count * order.value[index].price
        }
        return price
    })

    const orderDuration = computed(() => {
        if (!order.value) return 0
        var duration = 0
        for (let index = 0; index < order.value.length; index++) {
            if (order.value[index].duration > duration) {
                duration = order.value[index].duration
            }
        }
        return duration
    })

    return {
        order,
        orderTotalPrice,
        orderDuration,
    }
})

export default orderStore
