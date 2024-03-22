import { createSlice } from "@reduxjs/toolkit";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        showModal: false
    },
    reducers: {
        // show the [login modal]
        setShowRgisterModal(state) {
            state.showModal = true;
        },

        // hide the [login modal]
        setHideRgisterModal(state) {
            state.showModal = false;
        }
    }
});

const modalReducer = modalSlice.reducer;
const modalActions = modalSlice.actions;
export const { setShowRgisterModal, setHideRgisterModal } = modalSlice.actions;
export { modalActions, modalReducer }