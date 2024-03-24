import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import { setShowRgisterModal } from "../../../redux/slices/modalSlice";
import { setShowModal } from "../../../redux/slices/cartModalSlice";
import { FaUser, FaShop, FaMagnifyingGlass, FaRegMoon, FaCartShopping } from "react-icons/fa6";
import { LiaSun } from "react-icons/lia";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const FooterBottomMenu = () => {

    const dispatch = useDispatch();

    // for testing
    const currentUser = true;

    const { isDarkMode } = useSelector((state) => state.theme);

    const { cartItems } = useSelector((state) => state.cart);

    /*===========================================*/

    return (
        <div className="footer-bottom-menu">
            <ul>
                <li>
                    {
                        currentUser ?
                            <Link to="/account"><FaUser /></Link>
                            :
                            <span onClick={() => dispatch(setShowRgisterModal())}><FaUser /></span>
                    }
                </li>
                <li><Link to="/menu"><FaShop /></Link></li>
                <li onClick={() => dispatch(toggleTheme())}>
                    {isDarkMode ? <span><FaRegMoon /></span> : <span><LiaSun /></span>}
                </li>
                <li onClick={() => dispatch(setShowModal())}>
                    <small>{cartItems.length}</small>
                    <span><FaCartShopping /></span>
                </li>
                <li><Link to="/search"><FaMagnifyingGlass /></Link></li>
            </ul>
        </div>
    )
}

export default FooterBottomMenu; 