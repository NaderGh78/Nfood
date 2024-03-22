import { createSlice } from "@reduxjs/toolkit";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const cartModalSlice = createSlice({
    name: "cartModal",
    initialState: {
        showCartModal: false
    },
    reducers: {
        // show the [cart modal]
        setShowModal(state) {
            state.showCartModal = true;
        },

        // hide the [cart modal]
        setHideModal(state) {
            state.showCartModal = false;
        }
    }
});

const cartModalReducer = cartModalSlice.reducer;
const cartModalActions = cartModalSlice.actions;
export const { setShowModal, setHideModal } = cartModalSlice.actions;
export { cartModalActions, cartModalReducer }