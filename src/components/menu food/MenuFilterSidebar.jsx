import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice, FaCoffee } from "react-icons/fa";
import { LuSalad, LuDessert } from "react-icons/lu";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const MenuFilterSidebar = ({ showAll, selectedCategory, filterItems }) => {

    return (
        <div className="menu-filter-sidebar">
            <div className="menu-filter-sidebar-categories categories-style">
                <h3 style={{ color: "var(--dark)" }}>Categories</h3>
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
        </div>
    )
}

export default MenuFilterSidebar;