import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minPrice: 8000000,
    maxPrice: 15000000,
    ram:0,
    rom:0, 
    marca:'default Portatil',
    tamanio:0,
    OS:'default OS',
    GPU:'default GPU',
    CPU:'default CPU',
    //
    Q1:1,//
    Q2:2,//uso
    Q3:2,//
    Q4:2,//
}

export const portatilSlice = createSlice({
    name: 'portatil',
    initialState,
    reducers: {
        setPortatilMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setPortatilMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
        setPortatilRam: (state, action) => {
            state.ram = action.payload
        },
        setPortatilRom: (state, action) => {
            state.rom = action.payload
        },
        setPortatilMarca: (state, action) => {
            state.marca = action.payload
        },
        setPortatilTamanio: (state, action) => {
            state.tamanio = action.payload
        },
        setPortatilOS: (state, action) => {
            state.OS = action.payload
        },
        setPortatilGPU: (state, action) => {
            state.GPU = action.payload
        },
        setPortatilCPU: (state, action) => {
            state.CPU = action.payload
        },
        setPortatilQ1: (state, action) => {
            state.Q1 = action.payload
        },
        setPortatilQ2: (state, action) => {
            state.Q2 = action.payload
        },
        setPortatilQ3: (state, action) => {
            state.Q3 = action.payload
        },
        setPortatilQ4: (state, action) => {
            state.Q4 = action.payload
        },
    }
})

export const { 
    setPortatilMinPrice, 
    setPortatilMaxPrice, 
    setPortatilRam,
    setPortatilRom,
    setPortatilMarca,
    setPortatilTamanio,
    setPortatilOS,
    setPortatilGPU,
    setPortatilCPU,
    setPortatilQ1,
    setPortatilQ2,
    setPortatilQ3,
    setPortatilQ4,
} = portatilSlice.actions


//portatilReducer
export default portatilSlice.reducer