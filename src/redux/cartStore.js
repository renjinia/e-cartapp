import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlicer from "./slices/wishlistSlice"
const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlicer
    }
})
export default cartStore
