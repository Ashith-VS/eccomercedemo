import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slice/cartSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartSlice,
        }
    })
}

const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;