import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role1 : false,
    role2 :false,
    role3 : false
}
const roleSlice = createSlice({
    name:'role',
    initialState,
    reducers:{
        role1:(state,action)=>{
            state.role1=action.payload

        },
        role2:(state,action)=>{
            state.role2=action.payload
        },
        role3:(state,action)=>{
            state.role3=action.payload
        },
    }
})

export const {role1,role2,role3} = roleSlice.actions
export default roleSlice.reducer