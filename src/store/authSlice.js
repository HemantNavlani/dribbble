import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : '',
    userName:'',
    email:'',
    password:'',
    check:false,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signup:(state,action)=>{
            state.name = action.payload.name,
            state.userName = action.payload.userName,
            state.email = action.payload.email,
            state.password = action.payload.password,
            state.check= action.payload.check
        },
        changeMail:(state,action)=>{
            state.email = action.payload
        }
    }
})

export const {signup,changeMail} = authSlice.actions
export default authSlice.reducer