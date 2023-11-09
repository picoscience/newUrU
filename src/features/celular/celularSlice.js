import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minPrice: 100,
    maxPrice: 300,
    ram:0,
    rom:0, 
    os:0,
    size:0,
    marca:0,
    capacidad:0,
    red:0,
    addOn:0,
    //
    Q1:3,//uso
    Q2:0,
    Q3:0,
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
        setCelularMarca: (state, action) => {
            state.marca = action.payload
        },
        setCelularCapacidad: (state, action) => {
            state.capacidad = action.payload
        },
        setCelularRed: (state, action) => {
            state.red = action.payload
        },
        setCelularAddON: (state, action) => {
            state.addOn = action.payload
        },
        setCelularQ1: (state, action) => {
            state.Q1 = action.payload
        },
        setCelularQ2: (state, action) => {
            state.Q2 = action.payload
        },
        setCelularQ3: (state, action) => {
            state.Q3 = action.payload
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
    setCelularMarca,
    setCelularCapacidad,
    setCelularRed,
    setCelularAddON,
    setCelularQ1,
    setCelularQ2,
    setCelularQ3,
} = celularSlice.actions


//celularReducer
export default celularSlice.reducer