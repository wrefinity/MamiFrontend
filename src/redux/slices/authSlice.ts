import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper"

type AuthState = {
    auth: {
        userInfo: {
            _id: string,
            login: string,
            fullName: string,
            status: string,
            active: boolean,
            type: string,
            profileID: string
        } | null,
        isLoggedIn: boolean,
        token: string | null
    }
    
}

const initialState = {
    auth: {userInfo: null, isLoggedIn: false, token: null}
} as AuthState

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action){
            state.auth.userInfo = action.payload,
            state.auth.isLoggedIn = true,
            state.auth.token = action.payload.token
        },
        logOut(state){
            state.auth.userInfo = null,
            state.auth.isLoggedIn = false
            state.auth.token = null
        },
        clearToken(state){
            state.auth.token = null
        },
        addToken(state, action){
            state.auth.token = action.payload
        },
        addUserInfo(state, action){
            state.auth.userInfo = action.payload
        },
        logOutFalse(state){
            state.auth.isLoggedIn = false
        },
        clearUserInfo(state){
            state.auth.userInfo = null
        },
            // Special reducer for hydrating the state. Special case for next-redux-wrapper
        },
        extraReducers: (builder)=>{
            builder.addCase(HYDRATE, (state, action: AnyAction)=>{
                return {
                    ...state,
                    ...action.payload.auth,
                    };

            })
}})

export const {login, logOut, clearToken, addToken, logOutFalse, clearUserInfo, addUserInfo} = authSlice.actions
export default authSlice.reducer