import "./singleCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../redux/slices/cartModalSlice";
import { addToCart } from "../../../redux/apiCalls/cartApiCall";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const SingleCard = ({ product }) => {

    const { id, itemImg, itemName, itemDesc, itemPrice, sale, itemNewprice, itemQty } = product;

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const [inCart, setInCart] = useState(false);

    const [heart, setHeart] = useState(false);

    /*===========================================*/

    // change heart color when user like the item
    const handleChange = () => {
        setHeart(!heart);
    }

    /*===========================================*/

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(setShowModal());
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
        <div className="my-card">
            <div className="card">
                {sale ? <span className="new-price">Sale!</span> : ""}
                <img src={itemImg} alt={itemName} />
                <div className="card-body">
                    <h5 className="card-title text-capitalize" style={{ userSelect: "text", color: "var(--dark)" }}>
                        <Link to={`/products/${id}`}>{itemName}</Link>
                    </h5>
                    <p className="card-text">
                        {itemDesc.length > 38 ? itemDesc.slice(0, 38) + "..." : itemDesc}
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
                        <span onClick={() => {
                            handleAddToCart(product)
                        }}>
                            {inCart ? "In Cart" : "Add to Cart"}{inCart ? <small>{itemQty}</small> : ""}
                        </span>
                        <span onClick={() => handleChange()}>
                            <FaHeart style={{ color: heart ? "var(--light-red)" : "#686d6f" }} />
                        </span>
                        <Link to={`/products/${id}`}><FaEye /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;