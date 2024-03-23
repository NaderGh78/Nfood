import Modal from 'react-bootstrap/Modal';
import { FaXmark } from "react-icons/fa6";
import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice, FaCoffee } from "react-icons/fa";
import { LuSalad, LuDessert } from "react-icons/lu";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const MenuFilterModal = ({ showCatModal, closeCatModal, showAll, selectedCategory, filterItems }) => {
    return (
        <div>
            <Modal
                show={showCatModal}
                onHide={closeCatModal}
                className='cart-modal-Modal'
                backdrop="static"
            >
                <div className="top-heading-title d-flex align-items-center justify-content-between text-white p-3 bg-dark">
                    <h3 className='mb-0'>Categories</h3>
                    <span
                        onClick={() => closeCatModal()}
                    >
                        <FaXmark />
                    </span>
                </div>
                <Modal.Body>
                    <div className="categories-style">
                        <ul>
                            <li
                                onClick={showAll}
                                className={selectedCategory === "all" ? "active" : ""}
                            >
                                <span><FaBurger />All</span><span>(8)</span>
                            </li>

                            <li
                                onClick={() => filterItems("pizza")}
                                className={selectedCategory === "pizza" ? "active" : ""}
                            >
                                <span><FaPizzaSlice />Pizza</span><span>(8)</span>
                            </li>

                            <li
                                onClick={() => filterItems("salad")}
                                className={selectedCategory === "salad" ? "active" : ""}
                            >
                                <span><LuSalad />Salad</span><span>(8)</span>
                            </li>

                            <li
                                onClick={() => filterItems("burger")}
                                className={selectedCategory === "burger" ? "active" : ""}
                            >
                                <span><FaBurger />Burger</span><span>(8)</span>
                            </li>

                            <li
                                onClick={() => filterItems("desserts")}
                                className={selectedCategory === "desserts" ? "active" : ""}
                            >
                                <span><LuDessert />Desserts</span><span>(8)</span>
                            </li>

                            <li
                                onClick={() => filterItems("drinks")}
                                className={selectedCategory === "drinks" ? "active" : ""}
                            >
                                <span><FaCoffee />Drinks</span><span>(8)</span>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MenuFilterModal;