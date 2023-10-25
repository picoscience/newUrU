import { configureStore } from "@reduxjs/toolkit"
import productReducer from '../features/product/productSlice'
import portatilReducer from '../features/portatil/portatilSlice'
import celularReducer from '../features/celular/celularSlice'
import pcReducer from '../features/pc/pcSlice'
import tabletReducer from '../features/tablet/tabletSlice'

export const store = configureStore({
    reducer:{
        product: productReducer,
        portatil: portatilReducer,
        celular: celularReducer,
        pc: pcReducer,
        tablet: tabletReducer,
    },
})