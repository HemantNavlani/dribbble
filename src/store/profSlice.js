import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : '',
    location:'',
}
const profSlice = createSlice({
    name:'prof',
    initialState,
    reducers:{
        profile:(state,action)=>{
            state.image = action.payload.image,
            state.location = action.payload.location
        },
    }
})

export const {profile} = profSlice.actions
export default profSlice.reducer