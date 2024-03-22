import { cartActions } from "../slices/cartSlice";

/*===========================================*/
/*===========================================*/
/*===========================================*/

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    try {
      dispatch(cartActions.isAddedToCart());
      dispatch(cartActions.addItemToCart(newItem));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
      setTimeout(() => dispatch(cartActions.clearIsAddedToCart()), 1200);
    } catch (error) {
      console.log(error);
    }
  };
}

/*===========================================*/

// Remove From Cart
export function removeFromCart(id) {
  return (dispatch, getState) => {
    try {
      dispatch(cartActions.removeItemFromCart(id));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}

/*===========================================*/

// increase product
export function increaseProduct(id) {
  return (dispatch, getState) => {
    try {
      dispatch(cartActions.increase(id));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}

/*===========================================*/

//decrease producet
export function decreaseProduct(id) {
  return (dispatch, getState) => {
    try {
      dispatch(cartActions.decrease(id));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}