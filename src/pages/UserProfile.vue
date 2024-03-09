<script lang="ts" setup>
import { ref } from "vue"
import InputText from "primevue/inputtext"
import InputNumber from "primevue/inputnumber"

const firstname = ref("")
const lastname = ref("")
const tableNumber = ref<number>()
</script>
<template>
    <div class="card">
        <p class="title text-primary">Firstname:</p>
        <span class="p-float-label">
            <InputText v-model="firstname" />
            <label>Firstname</label>
        </span>
        <p class="title text-primary">Lastname:</p>
        <span class="p-float-label">
            <InputText v-model="lastname" />
            <label>Lastname</label>
        </span>
        <p class="title text-primary">Table number:</p>
        <span class="p-float-label">
            <InputNumber v-model="tableNumber" />
            <label>Table number</label>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.card {
    .title {
        font-size: 16px;
    }
    .p-float-label {
        margin-bottom: 30px;
    }
}
</style>
