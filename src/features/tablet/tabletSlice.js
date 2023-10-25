import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minPrice: 400,
    maxPrice: 800,
    ram:0,
    rom:0, 
    marca:'default Tablet',
    //
    Q1:4,//uso
    Q2:1,//uso
}

export const tabletSlice = createSlice({
    name: 'tablet',
    initialState,
    reducers: {
        setTabletMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setTabletMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
        setTabletRam: (state, action) => {
            state.ram = action.payload
        },
        setTabletRom: (state, action) => {
            state.rom = action.payload
        },
        setTabletMarca: (state, action) => {
            state.marca = action.payload
        },
        setTabletQ1: (state, action) => {
            state.Q1 = action.payload
        },
        setTabletQ2: (state, action) => {
            state.Q2 = action.payload
        },
    }
})

export const { 
    setTabletMinPrice, 
    setTabletMaxPrice, 
    setTabletRam,
    setTabletRom,
    setTabletMarca,
    setTabletQ1,
    setTabletQ2,
} = tabletSlice.actions


//tabletReducer
export default tabletSlice.reducer