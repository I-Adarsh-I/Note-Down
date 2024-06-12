import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "../slices/UserSlice";

export const RootReducer = combineReducers({
    auth: UserSlice
})