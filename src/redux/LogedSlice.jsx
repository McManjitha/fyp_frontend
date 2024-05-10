import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    logged: "LOGGED_OUT"
}

export const logSlice = createSlice({
    name : "logging",
    initialState,
    reducers : {
        login : (state, action) => {
            state.logged = "LOGGED_IN"
        },
        logout : (state, action) => {
            state.logged = "LOGGED_OUT"
        }
    }
})

export const {login, logout} = logSlice.actions;
export default logSlice.reducer 