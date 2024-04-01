import { createSlice } from "@reduxjs/toolkit";



const initalstate = {
    data:[]
}

const restaurantSlice = createSlice({
    name:"restaurentSlice",
    initalstate,
    reducers:{
        getRestaurants:(state , action)=>{
            state.data = action.payload
        }
    }
});
export const {getRestaurants} = restaurantSlice.actions;

export default restaurantSlice.reducers;