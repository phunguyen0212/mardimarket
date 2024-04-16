import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchCategoryList = createAsyncThunk(
    'category/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/categories/allcategory', { params: thunkAPI })
        return response.data;
    }
)

export const fetchChildrenCategories = createAsyncThunk(
    'childrenCategories/fetchCategories',
    async (parentId) => {
        const response = await axios.get(URL_API  +`/api/categories/allcategories/${parentId}/children`)
        return response.data.children;
    }
)

export const fetchParentCategories = createAsyncThunk(
    'parentCategories/fetchCategories',
    async(thunkAPI) => {
        const response = await axios.get(URL_API  +`/api/categories/allcategories/parent`)
        console.log("parentCate", response.data);
        return response.data;
    }
)
export const fetchGrandChildrenCategories = createAsyncThunk(
    'grandChildrenCategories/fetchCategories',
    async (parentId) => {
        const response = await axios.get(URL_API  +`/api/categories/allcategories/${parentId}/grandchildren`)
        console.log("grand", response.data.children);
        return response.data.children;
    }
)
export const fetchAllCategories = createAsyncThunk(
    'AllCategories/fetchCategories',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/categories/allcategories')
        return response.data;
    }
)   