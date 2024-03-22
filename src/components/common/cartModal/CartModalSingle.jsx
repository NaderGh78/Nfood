import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHideModal } from "../../../redux/slices/cartModalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

/*======================================*/
/*======================================*/
/*======================================*/

const CartModalSingle = ({ data, onDelete }) => {

    const { id, itemImg, itemName, itemPrice, itemQty, sale, itemNewprice } = data;

    const dispatch = useDispatch();

    /*======================================*/

    return (
        <div className='cart-modal-single'>
            <div className="left">
                <span onClick={() => onDelete(id)}>
                    <AiOutlineCloseCircle />
                </span>
                <Link to={`/products/${id}`} onClick={() => dispatch(setHideModal())}>
                    <img src={process.env.PUBLIC_URL + itemImg} alt={itemName} />
                </Link>
            </div>
            <div className="right">
                <h5>
                    <Link to={`/products/${id}`} onClick={() => dispatch(setHideModal())}>
                        {itemName}
                    </Link>
                </h5>
                <p>
                    {
                        sale ?
                            <>{itemQty} x <span>${itemNewprice}</span> </> :
                            <>{itemQty} x <span>${itemPrice}</span> </>
                    }
                </p>
            </div>
        </div>
    )
}

export default CartModalSingle;