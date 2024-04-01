import {configureStore} from "@reduxjs/toolkit"
import restaurentSlice  from "./restaurentSlice"
import userAuth from "./userAuth";




const store= configureStore({
      reducer:{
        restaurants:restaurentSlice,
        user:userAuth,
      }
}); 

export default store 