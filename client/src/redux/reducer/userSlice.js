import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser, fetchUserList, loginUser } from "../api/userAPI";
const usersSlice = createSlice({
    name: 'login',
    initialState: {
        userData: [],
        user: [],
        userCurrent:{},
        isAuthenticated: false,
        userRole: '',
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(RegisterUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
                state.isAuthenticated = true;
                state.userRole = action.payload.data[0].role_name;
                state.userCurrent = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.errorMessage = action.payload
                state.isAuthenticated = false;
                state.userRole = '';
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(fetchUserList.fulfilled, (state, action) => {
                state.userData = action.payload
            })
            .addCase(fetchUserList.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(fetchUserList.pending, (state) => {
                state.isLoading = true
            })
            
    }
})

const { reducer } = usersSlice
export default reducer