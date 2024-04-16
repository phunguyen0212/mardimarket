import { createSlice} from "@reduxjs/toolkit";
import { fetchChildrenCategories,fetchAllCategories,fetchParentCategories,fetchGrandChildrenCategories } from "../../api/categoryAPI";

const categoriesSlice = createSlice({ 
    name:'productCategories',
    initialState:{
      categoriesData :[],
      childCategories: [],
      parentCategories:[],
      grandChildCategories:[],
      isLoading: false,
      isSuccess: false,
      errorMessage: '',
    },
     extraReducers: (builder) => { 
        builder

      .addCase(fetchGrandChildrenCategories.fulfilled, (state, action) => {
      state.grandChildCategories = action.payload
    })
    .addCase(fetchGrandChildrenCategories.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchGrandChildrenCategories.pending ,(state) => {
      state.isLoading = true
    })


    .addCase(fetchChildrenCategories.fulfilled, (state, action) => {
      state.childCategories = action.payload
    })
    .addCase(fetchChildrenCategories.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchChildrenCategories.pending ,(state) => {
      state.isLoading = true
    })


    .addCase(fetchParentCategories.fulfilled, (state, action) => {
      state.parentCategories = action.payload
    })
    .addCase(fetchParentCategories.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchParentCategories.pending ,(state) => {
      state.isLoading = true
    })


    .addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categoriesData = action.payload
    })
    .addCase(fetchAllCategories.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchAllCategories.pending ,(state) => {
      state.isLoading = true
    })

     }
})

const {reducer} = categoriesSlice
export default reducer
