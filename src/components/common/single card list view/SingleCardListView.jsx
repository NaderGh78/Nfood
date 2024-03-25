import "./singleCardListView.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/apiCalls/cartApiCall";
import { setShowModal } from "../../../redux/slices/cartModalSlice";
import { setShowRgisterModal } from "../../../redux/slices/modalSlice";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const SingleCardListView = ({ product }) => {

    const { id, itemImg, itemName, itemDesc, itemPrice, sale, itemNewprice, itemQty } = product;

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const [inCart, setInCart] = useState(false);

    const [heart, setHeart] = useState(false);

    // for testing
    const currentUser = true;

    /*===========================================*/

    // change heart color when user like the item
    const handleChange = () => {
        setHeart(!heart);
    }
    /*===========================================*/

    const handleAddToCart = (product) => {
        /*
       in case there is login user add to cart and show the cart modal,
       otherwise show the register modal
       */
        if (currentUser) {
            dispatch(addToCart(product));
            dispatch(setShowModal());
        } else {
            dispatch(setShowRgisterModal())
        }
    };

    /*===========================================*/

    useEffect(() => {
        const productIndx = cartItems.findIndex(
            (ele) => ele.id === product.id
        );
        setInCart(productIndx === -1 ? false : true);
    }, [cartItems, product])

    /*===========================================*/

    return (
        <div className="single-card-list-view">
            {sale ? <span className="new-price">Sale!</span> : ""}
            <div className="image-left">
                {/* <img src={process.env.PUBLIC_URL + itemImg} alt={itemName} /> */}
                <img src={itemImg} alt={itemName} />
            </div>
            <div className="right">
                <h5>
                    <Link to={`/products/${id}`}>
                        {itemName}
                    </Link>
                </h5>
                <p className="card-text">
                    {itemDesc.length > 90 ? itemDesc.slice(0, 90) + "..." : itemDesc}
                </p>
                <p className="edit-price">
                    {sale
                        ?
                        <>
                            <span className="text-decoration-line-through text-secondary">${itemPrice}</span>
                            <span className="ms-2">${itemNewprice}</span>
                        </>
                        :
                        <>
                            <span>${itemPrice}</span>
                        </>}
                </p>
                <div className="bottom">
                    <span onClick={() => handleAddToCart(product)}>
                        {inCart ? "In Cart" : "Add to Cart"}{inCart ? <small>{itemQty}</small> : ""}
                    </span>
                    <span onClick={() => handleChange()}>
                        <FaHeart style={{ color: heart ? "var(--light-red)" : "#686d6f" }} />
                    </span>
                    <Link to={`/products/${id}`}><FaEye /></Link>
                </div>
                {/* end bottom */}
            </div>
        </div>
    )
}

export default SingleCardListView;