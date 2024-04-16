import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchProductInCart = createAsyncThunk(
    'cart/fetchProductInCartByUserId',
    async (account_id,thunkAPI) => {
        const response = await axios.get(URL_API  + `/api/cart/${account_id}/items/`,)
        return response.data;
    }
)

export const AddProductToCart = createAsyncThunk(
    'cart/AddProductToCart',
    async (productAdd,thunkAPI) => {
        const response = await axios.post(URL_API  + `/api/cart/add-to-cart`, productAdd)

        return response.data;
    }
)

export const DeleteProductCart = createAsyncThunk(
    'cart/DeleteProductCart',
    async (id) => {
        const response = await axios.delete(URL_API  + `/api/cart/${id.account_id}/items/${id.cart_item_id}`)
        console.log("delete",response.data);
        return response.data;
    }
)