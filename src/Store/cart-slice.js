import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartList.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                state.cartList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image,
                });
                state.totalQuantity++;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeFromCart(state, action) {
            const { id } = action.payload;

            const existingItem = state.cartList.find((item) => id === item.id);
            if (existingItem.quantity === 1) {
                state.cartList = state.cartList.filter(
                    (item) => item.id !== id
                );
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
