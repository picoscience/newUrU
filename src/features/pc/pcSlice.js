import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minPrice: 600,
    maxPrice: 1100,
    ram:0,
    rom:0, 
    marca:'default Pc',
    //
    Q1:1,//uso
    Q2:1,
    Q3:2,
}

export const pcSlice = createSlice({
    name: 'pc',
    initialState,
    reducers: {
        setPcMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setPcMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
        setPcRam: (state, action) => {
            state.ram = action.payload
        },
        setPcRom: (state, action) => {
            state.rom = action.payload
        },
        setPcMarca: (state, action) => {
            state.marca = action.payload
        },
        setPcQ1: (state, action) => {
            state.Q1 = action.payload
        },
        setPcQ2: (state, action) => {
            state.Q2 = action.payload
        },
        setPcQ3: (state, action) => {
            state.Q3 = action.payload
        },
    }
})

export const { 
    setPcMinPrice, 
    setPcMaxPrice, 
    setPcRam,
    setPcRom,
    setPcMarca,
    setPcQ1,
    setPcQ2,
    setPcQ3,
} = pcSlice.actions


//pcReducer
export default pcSlice.reducer