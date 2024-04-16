import { fetchProductListByCategory } from "../api/productListAPI";
import { createSlice } from "@reduxjs/toolkit";
const productListByCategorySlice = createSlice({
    name: 'productListByCategory',
    initialState: {
      products: [],
      status: '',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductListByCategory.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProductListByCategory.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(fetchProductListByCategory.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  
const {reducer} = productListByCategorySlice
export default reducer
