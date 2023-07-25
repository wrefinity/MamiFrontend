import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


const persistConfig = {
    key: "root",
    storage
}

const baseReducer = {
    auth: authReducer
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)