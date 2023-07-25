import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper"
import { useRouter } from "next/navigation";

const initialState = {
    sideBarOpen: true
}

const uiSlice = createSlice({
    name: "sideBarToggle",
    initialState,
    reducers: {
        sideBarToggle(state){
            state.sideBarOpen = !state.sideBarOpen
        },

    }
})

export const {sideBarToggle} = uiSlice.actions
export default uiSlice.reducer