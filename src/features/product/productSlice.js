import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: 'portatil',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.name = action.payload
        },
    }
})

export const 
{ 
    setProduct, 
} = productSlice.actions


//productReducer
export default productSlice.reducer