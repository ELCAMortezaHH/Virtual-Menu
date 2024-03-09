<script lang="ts" setup>
import Button from "primevue/button"
import { useRouter } from "vue-router"

const router = useRouter()
</script>
<template>
    <div class="responsive-container">
        <div class="image-container">
            <img src="@/assets/Ali baba.jpg" alt="Ali baba" class="image" />
        </div>
        <div class="actions-container">
            <h1 class="title text-primary">Welcome to</h1>
            <h1 class="title">Virtual Menu</h1>
            <p class="description"> The best Virtual Menu template for coffee shops and restaurants </p>

            <Button label="Visit template" type="button" class="p-button-raised action" @click="router.push('/menu')" />
            <Button label="More about us" type="button" class="p-button-outlined action" />
        </div>
    </div>

    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
        <div class="mb-3 font-bold text-3xl">
            <span class="text-900">One Product, </span>
            <span class="text-blue-600">Many Solutions</span>
        </div>
        <div class="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        <div class="grid">
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Built for Developers</div>
                <span class="text-700 line-height-3"
                    >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.</span
                >
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-lock text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
                <span class="text-700 line-height-3"
                    >Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices
                    sagittis.</span
                >
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-check-circle text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Easy to Use</div>
                <span class="text-700 line-height-3"
                    >Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae
                    semper.</span
                >
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-globe text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
                <span class="text-700 line-height-3"
                    >Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span
                >
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-github text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Open Source</div>
                <span class="text-700 line-height-3"
                    >Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec
                    feugiat.
                </span>
            </div>
            <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-shield text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Trusted Security</div>
                <span class="text-700 line-height-3"
                    >Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span
                >
            </div>
        </div>
    </div>

    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-700 text-center">
            <div class="text-blue-600 font-bold mb-3"><i class="pi pi-instagram"></i>alibabacoffeeshop</div>
            <div class="text-900 font-bold text-5xl mb-3">Join Ali baba's Instagram Community</div>
            <div class="text-700 text-2xl mb-5">Share your moments with us</div>
            <a
                href="https://www.instagram.com/alibabacoffeeshop/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg=="
            >
                <Button
                    label="Join Now"
                    icon="pi pi-instagram"
                    class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
                >
                </Button>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.image {
    margin-bottom: 10px;
    height: 100%;
    width: 100%;
}
.actions-container {
    margin: auto;
    padding-left: 5dvw;
    .title {
        margin: 5px;
    }
    .description {
        margin: 20px 0 20px 10px;
    }
    .action {
        margin: 0 10px;
    }
}
</style>
