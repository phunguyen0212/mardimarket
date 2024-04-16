import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducer/cartSlice'
import productListSlice from '../reducer/ProductListSlice'
import categorySlice from '../reducer/CategorySlice'
import productDetailSlice from '../reducer/ProductSLice';
import usersSlice from '../reducer/userSlice'
import { checkAuth } from '../../middleware/middleware';
import productListByCategorySlice from'../reducer/ProductListByCategory';
import categoriesSlice from '../reducer/categoriesSlice/CategoriesSlice'
import authSlice from '../reducer/authSlice'
export const store = configureStore({
  reducer: {
    cart:  cartSlice,
    producsList:productListSlice,
    categoryList: categorySlice,
    productDetail: productDetailSlice,
    users: usersSlice,
    productByCategory: productListByCategorySlice,
    categories:categoriesSlice,
    auth:authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkAuth),
})