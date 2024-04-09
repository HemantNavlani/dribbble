import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import profSlice from "./profSlice";
import roleSlice from "./roleSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        prof:profSlice,
        role:roleSlice
    }
})

export default store