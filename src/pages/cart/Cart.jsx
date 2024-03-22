import "./cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProduct, increaseProduct, removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { cartTotalSelector } from "../../redux/slices/cartSlice";
import { useTitle } from "../../components/helpers";
import { HeadingBreadcrumb } from "../../allPagesPaths";
import { AiOutlineCloseCircle } from "react-icons/ai";
import swal from "sweetalert";

/*===========================================*/
/*===========================================*/
/*===========================================*/

// dispatch(cartTotalSelector)
const Cart = () => {

    useTitle(`Cart - Nfood`);

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

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
        <div className="cart">
            <HeadingBreadcrumb breadcrumb="cart" />
            {cartItems.length > 0
                ?
                <>
                    <div className="myContainer">
                        <div className="cart-content">
                            <div className="my-table">


                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">PRODUCT</th>
                                            <th scope="col">PRICE</th>
                                            <th scope="col">QUANTITY</th>
                                            <th scope="col">SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((el, idx) => (
                                                <tr key={idx}>
                                                    <th scope="row">{idx + 1}</th>
                                                    <td>
                                                        <div className="img-box">
                                                            <span onClick={() => deleteItemHandler(el.id)}>
                                                                <AiOutlineCloseCircle />
                                                            </span>
                                                            <Link to={`/products/${el.id}`}>
                                                                <img src={process.env.PUBLIC_URL + el.itemImg} alt={el.itemName} />
                                                            </Link>
                                                            <Link to={`/products/${el.id}`}>
                                                                <h5>{el.itemName}</h5>
                                                            </Link>
                                                        </div>
                                                    </td>


                                                    <td>
                                                        {/* ${el.itemPrice} */}
                                                        {el.sale
                                                            ?
                                                            <>
                                                                <span className="text-decoration-line-through text-secondary">${el.itemPrice}</span>
                                                                <span className="ms-2">${el.itemNewprice}</span>
                                                            </>
                                                            :
                                                            <>
                                                                <span>${el.itemPrice}</span>
                                                            </>}
                                                    </td>














                                                    <td>
                                                        <div className="input-box">
                                                            <span>{el.itemQty}</span>
                                                            <div>
                                                                <button onClick={() => dispatch(increaseProduct(el.id))}>+</button>
                                                                <button onClick={() => dispatch(decreaseProduct(el.id))}>-</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $
                                                        {
                                                            el.sale ?
                                                                (el.itemNewprice * el.itemQty).toFixed(2) :
                                                                (el.itemPrice * el.itemQty).toFixed(2)
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                            </div>




                            <div className="total-cart">
                                <h5>CART TOTALS</h5>
                                <ul>
                                    <li>
                                        <h6>
                                            Subtotal
                                            <span>
                                                ${cartTotal.toFixed(2)}
                                            </span>
                                        </h6>
                                    </li>
                                    <li><h6>Shipping<span>Shipping costs are calculated during checkout.</span></h6></li>
                                    <li>
                                        <h6>
                                            Total
                                            <span>
                                                ${cartTotal.toFixed(2)}
                                            </span>
                                        </h6>
                                    </li>
                                </ul>
                                <Link to="/checkout">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="empty-cart">
                    <img src={process.env.PUBLIC_URL + "/assets/images/empty-cart.png"} alt="empty-cart" />
                    <h5>Your cart is currently empty.</h5>
                    <Link to="/menu">Return to menu</Link>
                </div>
            }
        </div>
    )
}

export default Cart;