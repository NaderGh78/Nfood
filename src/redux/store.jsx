import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { themeReducer } from "./slices/themeSlice";
import { modalReducer } from "./slices/modalSlice";
import { cartModalReducer } from "./slices/cartModalSlice";
import { categoryReducer } from "./slices/categorySlice";
import { customerReducer } from "./slices/customerSlice";

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
        category: categoryReducer,
        customer: customerReducer
    }
});

export default store;