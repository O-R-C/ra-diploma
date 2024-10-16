import { configureStore } from '@reduxjs/toolkit'
import topSalesSlice from './features/top-sales/topSalesSlice'
import catalogSlice from './features/catalog/catalogSlice'
import categoriesSlice from './features/categories/categoriesSlice'
import cartSlice from './features/cart/cartSlice'
import productSlice from './features/product/productSlice'

const store = configureStore({
  reducer: {
    topSales: topSalesSlice,
    catalog: catalogSlice,
    product: productSlice,
    categories: categoriesSlice,
    cart: cartSlice,
  },
})

export default store
