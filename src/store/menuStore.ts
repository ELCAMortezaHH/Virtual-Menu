import { defineStore } from "pinia"
import categoryItemObject from "@/types/categoryItemObject"
import productItemObject from "@/types/productItemObject"
// import { categoryItems, productItems } from "@/data/menuData"

const menuStore = defineStore("menu", () => {
    const categoryItems: categoryItemObject[] = [
        { id: 1, image: "../public/images/pizza.jpg", title: "پیتزا" },
        { id: 2, image: "../public/images/sandwich.jpg", title: "ساندویچ" },
        { id: 3, image: "../public/images/cake.jpg", title: "کیک" },
    ]
    const productItems: productItemObject[] = [
        {
            id: 1,
            categoryId: 1,
            image: "../public/images/pizza.jpg",
            title: "پیتزا مخلوط",
            duration: 30,
            price: 55000,
            avalable: true,

            count: 0,
        },
        {
            id: 2,
            categoryId: 1,
            image: "../public/images/special-pizza.jpg",
            title: "پیتزا مخصوص",
            duration: 30,
            price: 70000,
            avalable: false,

            count: 0,
        },
        {
            id: 3,
            categoryId: 1,
            image: "../public/images/vegan-pizza.jpg",
            title: "پیتزا سبزیجات",
            duration: 30,
            price: 55000,
            avalable: true,

            count: 0,
        },
        {
            id: 4,
            categoryId: 1,
            image: "../public/images/pepperoni-pizza.jpg",
            title: "پیتزا پپرونی",
            duration: 30,
            price: 65000,
            avalable: true,

            count: 0,
        },

        {
            id: 5,
            categoryId: 1,
            image: "../public/images/chicken-pizza.jpg",
            title: "پیتزا مرغ",
            duration: 30,
            price: 60000,
            avalable: true,

            count: 0,
        },
        {
            id: 6,
            categoryId: 2,
            image: "../public/images/sandwich.jpg",
            title: "همبرگر",
            duration: 20,
            price: 50000,
            avalable: false,

            count: 0,
        },
        {
            id: 7,
            categoryId: 3,
            image: "../public/images/cake.jpg",
            title: "کیک شکلاتی",
            duration: 5,
            price: 20000,
            avalable: true,

            count: 0,
        },
    ]

    return {
        categoryItems,
        productItems,
    }
})

export default menuStore
