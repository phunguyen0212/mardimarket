import { createSlice } from "@reduxjs/toolkit";
import { fetchProductInCart, AddProductToCart, DeleteProductCart } from "../api/cartAPI";
const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductInCart.fulfilled, (state, action) => {
        state.cartItems = action.payload
      })
      .addCase(fetchProductInCart.rejected, (state, action) => {
        state.errorMessage = action.payload
      })
      .addCase(fetchProductInCart.pending, (state) => {
        state.isLoading = true
      })


      .addCase(AddProductToCart.fulfilled, (state, action) => {
        state.cartItems = [...state.cartItems, action.payload];
      })
      .addCase(AddProductToCart.rejected, (state, action) => {
        state.errorMessage = action.payload
      })
      .addCase(AddProductToCart.pending, (state) => {
        state.isLoading = true
      })

      .addCase(DeleteProductCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.cart_item_id !== action.payload);
      })
      .addCase(DeleteProductCart.rejected, (state, action) => {
        state.errorMessage = action.payload
      })
      .addCase(DeleteProductCart.pending, (state) => {
        state.isLoading = true
      })
  }
})
const { reducer } = CartSlice
export default reducer
