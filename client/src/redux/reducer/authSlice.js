import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "../api/userAPI";
const authenSlice = createSlice({
    name: 'loginAdmin',
    initialState: {
        userData: [],
        user: [],
        isAuthenticated: false,
        userRole: '',
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.userRole = '';
            localStorage.removeItem('user')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
                state.isAuthenticated = true;
                state.userRole = action.payload.data[0].role_name;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.errorMessage = action.payload
                state.isAuthenticated = false;
                state.userRole = '';
            })
            .addCase(loginAdmin.pending, (state) => {
                state.isLoading = true
            })
    }
})

const {actions, reducer } = authenSlice
export const {logout } = actions
export default reducer