import { createSlice } from "@reduxjs/toolkit";
import { fetchProductList } from "../api/productListAPI";
const productListSlice = createSlice({
  name:'productsList',
  initialState:{
    productsData :[],
    isLoading: false,
    isSuccess: false,
    errorMessage: 'Lỗi',
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductList.fulfilled, (state, action) => {
      state.productsData = action.payload
      state.push(action.payload)
    })
    .addCase(fetchProductList.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchProductList.pending ,(state) => {
      state.isLoading = true
    })
  },
})


const {reducer} = productListSlice
export default reducer
