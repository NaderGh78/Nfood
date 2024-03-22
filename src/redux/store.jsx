import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { themeReducer } from "./slices/themeSlice";
import { modalReducer } from "./slices/modalSlice";
import { cartModalReducer } from "./slices/cartModalSlice";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        theme: themeReducer,
        modal: modalReducer,
        cartModal: cartModalReducer,
    }
});

export default store;