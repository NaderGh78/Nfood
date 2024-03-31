import { createSlice } from "@reduxjs/toolkit";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],

        cartLoading: false
    },
    reducers: {

        addItemToCart(state, action) {

            const newItem = action.payload;

            const isItemExistInCart = state.cartItems.find(
                (cartItem) => cartItem.id === newItem.id
            );

            if (isItemExistInCart) {
                state.cartItems = state.cartItems.map((item) =>
                    item.id === newItem.id ? newItem : item
                );
            } else {
                state.cartItems = [...state.cartItems, newItem];
            }

        },
        increase(state, action) {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.itemQty = cartItem.itemQty + 1;
        },
        decrease(state, action) {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.itemQty = cartItem.itemQty === 1 ? 1 : cartItem.itemQty - 1;
        },

        // show loading when add item to cart
        isAddedToCart(state) {
            state.cartLoading = true;
        },

        // hide loading when add item to cart
        clearIsAddedToCart(state) {
            state.cartLoading = false;
        },

        // remove item
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        // empty cart
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
});

// get total price
export const cartTotalSelector = (state) => state.cart.cartItems.reduce((total, item) => {

    /*
    check if there is a [sale for single product] , make total price for the new price [after sale],
    otherwise make total price for the price
    */
    if (item.sale) {

        return total + item.itemNewprice * item.itemQty

    } else {

        return total + item.itemPrice * item.itemQty

    }
}, 0);

export const { clearCart } = cartSlice.actions;
const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer }; 