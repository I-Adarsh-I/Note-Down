import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    isLoading:false,
    isLoggedIn: false
}

const UserSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        loginRequested(state, action){
            state.isLoading = true;
            state.isLoggedIn = false;
        },
        loginSuccessfull(state, action){
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading=false;
        },
        loginError(state, action){
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        logoutRequested(state,action){
            state.isLoading = true;
        },
        logoutSuccessull(state, action){
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = {};
        }
    }
})

export const { loginRequested, loginSuccessfull, loginError, logoutRequested, logoutSuccessull} = UserSlice.actions;
export default UserSlice.reducer;