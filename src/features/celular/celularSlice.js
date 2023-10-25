import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minPrice: 100,
    maxPrice: 300,
    ram:0,
    rom:0, 
    os:0,
    size:0,
    camera:0,
    marca:0,
    //
    Q1:3,//uso
}

export const celularSlice = createSlice({
    name: 'celular',
    initialState,
    reducers: {
        setCelularMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setCelularMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
        setCelularRam: (state, action) => {
            state.ram = action.payload
        },
        setCelularRom: (state, action) => {
            state.rom = action.payload
        },
        setCelularOs: (state, action) => {
            state.os = action.payload
        },
        setCelularSize: (state, action) => {
            state.size = action.payload
        },
        setCelularCamera: (state, action) => {
            state.camera = action.payload
        },
        setCelularMarca: (state, action) => {
            state.marca = action.payload
        },
        setCelularQ1: (state, action) => {
            state.Q1 = action.payload
        },
    }
})

export const { 
    setCelularMinPrice, 
    setCelularMaxPrice, 
    setCelularRam,
    setCelularRom,
    setCelularOs,
    setCelularSize,
    setCelularCamera,
    setCelularMarca,
    setCelularQ1,
} = celularSlice.actions


//celularReducer
export default celularSlice.reducer