import './cartModal.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHideModal, setShowModal } from '../../../redux/slices/cartModalSlice';
import { cartTotalSelector } from '../../../redux/slices/cartSlice';
import { removeFromCart } from "../../../redux/apiCalls/cartApiCall";
import CartModalSingle from './CartModalSingle';
import Modal from 'react-bootstrap/Modal';
import { FaXmark } from "react-icons/fa6";
import swal from "sweetalert";

/*======================================*/
/*======================================*/
/*======================================*/

const CartModal = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    // get cartTotal
    const cartTotal = useSelector(cartTotalSelector);

    /*===========================================*/

    // Delete item Handler
    const deleteItemHandler = (id) => {
        swal({
            title: "Are you sure to delete this item ?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((isOk) => {
            if (isOk) {
                dispatch(removeFromCart(id));
            }
        });
    };

    /*===========================================*/

    return (
        <div className='cart-modal'>
            <div className="cart-modal-box">
                <Modal
                    show={setShowModal}
                    onHide={setHideModal}
                    className='cart-modal-Modal'
                    backdrop="static"
                >
                    <div className="top-heading-title d-flex align-items-center justify-content-between text-white p-3 bg-dark">
                        <h3 className='mb-0'>SHOPPING CART</h3>
                        <span onClick={() => dispatch(setHideModal())}>
                            <FaXmark />
                        </span>
                    </div>
                    <Modal.Body>
                        {cartItems.length ?
                            <>
                                <div className="cart-products-content">
                                    {cartItems.map((el, i) => (
                                        <CartModalSingle data={el} key={i} onDelete={deleteItemHandler} />
                                    ))}
                                </div>
                                {/* cart poroducts content end */}
                                <div className="cart-box-footer">
                                    <div className="total-price">
                                        <h4 className='mb-0'>Total Price</h4>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <Link
                                        to="/checkout"
                                        onClick={() => dispatch(setHideModal())}
                                        className='checkout-btn'
                                    >Checkout</Link>
                                    <Link
                                        to="/cart"
                                        onClick={() => dispatch(setHideModal())}
                                    >View cart</Link>
                                </div>
                                {/* cart box footer end */}
                            </>
                            :
                            <>
                                <div className='cart-is-empty'>
                                    <h6>Your cart is empty.</h6>
                                    <Link
                                        to="/menu"
                                        onClick={() => dispatch(setHideModal())}
                                    >Return to Menu</Link>
                                </div>
                            </>
                        }
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default CartModal;