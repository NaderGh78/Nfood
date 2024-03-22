import "./stickyAddCart.css";
import { LiaStarSolid } from "react-icons/lia";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const StickyAddCart = ({ product, addToCart, isVisible }) => {

    const { itemImg, itemName, itemPrice, sale, itemNewprice } = product;

    return (
        <div className={isVisible ? "sticky-add-cart slideUp" : "sticky-add-cart slideDown"}>
            <div className="myContainer">
                <div className="sticky-add-cart-content">
                    <div className="left">
                        <div className="image-box">
                            {/* <img src={process.env.PUBLIC_URL + itemImg} alt={itemName} /> */}
                            <img src={itemImg} alt={itemName} />
                        </div>
                        <div>
                            You're viewing: <span>{itemName}</span>
                            <div className="d-flex gap-3">
                                <h5>
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
                                </h5>
                                <ul>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                    <li><LiaStarSolid /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyAddCart;