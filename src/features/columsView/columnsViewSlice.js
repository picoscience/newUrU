import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    order:0,
    itemsPage:0,
    itemsRow:0,
    fontSize:0,
    imgSearch:0
}

export const columnsView = createSlice({
    name: 'columnsView',
    initialState,
    reducers: {
        setColumnsViewOrder: (state, action) => {
            state.order = action.payload
        },
        setColumnsViewItemsPage: (state, action) => {
            state.itemsPage = action.payload
        },
        setColumnsViewItemsRow: (state, action) => {
            state.itemsRow = action.payload
        },
        setColumnsViewFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        setColumnsViewImgSearch: (state, action) => {
            state.imgSearch = action.payload
        },
    }
})

export const { 
    setColumnsViewOrder, 
    setColumnsViewItemsPage, 
    setColumnsViewItemsRow,
    setColumnsViewFontSize,
    setColumnsViewImgSearch,
} = columnsView.actions


//celularReducer
export default columnsView.reducer