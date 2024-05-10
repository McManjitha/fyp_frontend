import {configureStore} from "@reduxjs/toolkit";
import logedReducer from "./redux/LogedSlice";

export const store = configureStore({
    reducer: {
        logSlice: logedReducer,
    }
})