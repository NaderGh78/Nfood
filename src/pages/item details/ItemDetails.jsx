import "./itemDetails.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchSingleProduct } from "../../redux/apiCalls/productApiCall";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import { LiaStarSolid } from "react-icons/lia";
import { FaBasketShopping } from "react-icons/fa6";
import { FaFacebookF, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { RelatedProducts, StickyAddCart, TabsItemDetailes } from "../../allPagesPaths";
import { HashLink } from 'react-router-hash-link';
import { useTitle } from "../../components/helpers/index";
import Spinner from "../../components/common/spinner/Spinner";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const ItemDetails = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const { products, product, loading } = useSelector((state) => state.product);

    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const [inCart, setInCart] = useState(false);

    // in order to show the bottom banner when scroll the page
    const [isVisible, setIsVisible] = useState(false);

    /*===========================================*/

    // capitalize the first letters that given in browser page title 
    const finalSentence = product?.itemName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    useTitle(`${finalSentence} - Nfood`);

    /*===========================================*/

    // fetch single product every time changed id
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
        // reset the quantity, in case we choose another related product
        setQuantity(1);
    }, [id]);

    /*===========================================*/

    // get all fetchProducts
    useEffect(() => {
        dispatch(fetchProducts());
    }, [id]);

    // get all related products categories except the current product that we get by it id
    const getAllProductsWithSameCat =
        products?.filter(ele => ele.itemCat === product?.itemCat)
            .filter(ele => ele.id !== product?.id);

    // get first 4 similair categories products
    const getFirstFourProducts =
        getAllProductsWithSameCat.length > 4 ?
            getAllProductsWithSameCat.slice(0, 4) : getAllProductsWithSameCat;

    /*===========================================*/

    // Add To Cart Handler
    const addToCartHandler = (product) => {
        dispatch(addToCart({ ...product, itemQty: quantity }));
        window.scrollTo(0, 0);
    };

    /*===========================================*/

    // check if the product already added to cart , in order to change the [add to cart] btn text
    useEffect(() => {
        const productIndx = cartItems.findIndex(
            (ele) => ele.id === product?.id
        );
        setInCart(productIndx === -1 ? false : true);
    }, [cartItems, product])

    /*===========================================*/

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);

    }, [isVisible])

    const listenToScroll = () => {
        let heightToShowComp = 700;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        if (winScroll > heightToShowComp) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    /*===========================================*/

    const handleIncrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrementQuantity = () => {
        setQuantity(prev => prev === 1 ? 1 : prev - 1);
    };

    /*===========================================*/

    if (loading) return <Spinner />;
    return (
        <div className="item-details">
            <div className="myContainer">
                <div className="item-details-content">
                    <div className="add-to-cart-banner" style={{ visibility: inCart ? "visible" : "hidden" }}>
                        <p className="mb-0">
                            “<span className="text-capitalize">{product?.itemName}</span>” has been added to your cart.
                        </p>
                        <Link to="/cart">View cart</Link>
                    </div>
                    <div className="item-details-top">
                        <div className="left">
                            <div>
                                {product?.sale ? <span>Sale!</span> : ""}
                                <img src={product?.itemBigImg} alt={product?.itemName} />
                            </div>
                        </div>
                        {/* end left */}
                        <div className="right">
                            <h1 className="text-capitalize">{product?.itemName}</h1>
                            <div className="product-rating">
                                <ul>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                </ul>
                                {/* we use the hashlink in order to jump to the review section in same page */}
                                <p>(<HashLink smooth to={`/products/${product?.id}/#reviews`}>
                                    5 Customer Reviews</HashLink>)
                                </p>
                            </div>
                            <p style={{ color: "var(--light-white)" }}>{product?.itemDesc}</p>
                            <div className="item-price">
                                {product?.sale
                                    ?
                                    <>
                                        <span className="text-decoration-line-through text-secondary">
                                            ${product?.itemPrice}
                                        </span>
                                        <span className="ms-2">${product?.itemNewprice}</span>
                                    </>
                                    :
                                    <>
                                        <span>${product?.itemPrice}</span>
                                    </>}
                            </div>
                            <div className="increase">
                                <button onClick={() => handleDecrementQuantity()} disabled={inCart}>-</button>
                                {/* <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    min="1"
                                    max="10"
                                /> */}
                                <span>{quantity}</span>
                                <button onClick={() => handleIncrementQuantity()} disabled={inCart}>+</button>
                                <button className="big-btn" onClick={() => addToCartHandler(product)} disabled={inCart}>
                                    {!inCart ? <><FaBasketShopping /> Add to Cart</> : "In Cart"}
                                    {/* 
                                    add to cart with spinner
                                    {
                                        cartLoading
                                            ? <MySpinner />
                                            :
                                            <>
                                                {!inCart ? <><FaBasketShopping /> Add to Cart</> : "In Cart"}
                                            </>
                                    } */}
                                </button>
                                <button className="heart"><FaHeart /></button>
                            </div>
                            <div className="product-meta">
                                <h6>Category : <Link>{product?.itemCat}</Link></h6>
                                <div className="share  d-flex">
                                    <span style={{ color: "var(--light-white)" }}>Share :</span>
                                    <ul>
                                        <li><Link to=""><FaFacebookF /></Link></li>
                                        <li><Link to=""><FaYoutube /></Link></li>
                                        <li><Link to=""><FaTwitter /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="extra-info">
                                <li>Free global shipping on all orders</li>
                                <li>30 days easy returns if you change your mind</li>
                                <li>Order before noon for same day dispatch</li>
                            </ul>
                        </div>
                        {/* end right */}
                    </div>
                    {/* end item details top */}
                    <div className="item-details-bottom">
                        <TabsItemDetailes />
                    </div>
                    {/* related products */}
                    <RelatedProducts relatedProducts={getFirstFourProducts} />
                </div>
                {/* end item details content */}
            </div>
            {/* show the footer sticky add to cart section*/}
            {product && !inCart ? <StickyAddCart product={product} addToCart={addToCartHandler} isVisible={isVisible} /> : ""}
        </div>
    )
}

export default ItemDetails;