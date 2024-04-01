import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isAuthenticated:false,
    token:"qwwsd"
}

const userAuthSlice = createSlice({
    name:"userAuthSlice",
    initialState,
    reducers:{
        userAuthSuccess:(state, action)=>{
            state.isAuthenticated = true;
            state.user = action.payload.user;
        }
    }

});

export const{userAuthSuccess } =userAuthSlice.actions

export default userAuthSlice.reducer