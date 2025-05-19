"use client"
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // console.log('state: ', JSON.stringify(state));
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            // console.log('state.cartItems: ', JSON.stringify(state.cartItems));

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            if (item) item.quantity += 1
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            if (item && item.quantity > 1) item.quantity -= 1
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }

})

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity,clearCart } = cartSlice.actions
export default cartSlice.reducer