// import menuDataObject from "@/types/menuDataObject.ts"
// import menuStore from "@/store/menuStore"
// import categoryItemObject from "@/types/categoryItemObject"
// import productItemObject from "@/types/productItemObject"

// const baseUrl = import.meta.env.VITE_API_URL

// async function getMenuData() {
//     return fetch(`${baseUrl}/menudata`).then((response) => response.json())
// }

// async function setMenuData() {
//     const menuData: menuDataObject = await getMenuData()
//     menuStore().categoryItems = menuData.categoryItems
//     menuStore().categoryItems.forEach((item) => (item.image = `${baseUrl}/menudata/${item.image}`))

//     menuStore().productItems = menuData.productItems
//     menuStore().productItems.forEach((item) => {
//         item.image = `${baseUrl}/menudata/${item.image}`
//         item.avalable = true
//         item.count = 0
//     })
// }

function setMenuData() {
    return
}

export default setMenuData
