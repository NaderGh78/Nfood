import "./menuFilter.css";
import { SingleCard, SingleCardListView } from "../../../allPagesPaths";
import Spinner from "../../common/spinner/Spinner";
import { FaList } from "react-icons/fa6";
import { FaGrip } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const MenuFilter = ({
    loading,
    allItems,
    view,
    changeToLIstViewHandler,
    changeToGridViewHandler,
    spanRef,
    filterItems,
    selectedCategory,
    showAll,
    handleSortChange,
    sortOption
}) => {

    /*===========================================*/
    // if (loading) return <Spinner />;
    return (
        <div className="menu-filter">
            <div className="myContainer">
                <div className="top">
                    <ul>
                        <li
                            onClick={showAll}
                            className={selectedCategory === "all" ? "active" : ""}
                        >
                            All
                        </li>

                        <li
                            onClick={() => filterItems("pizza")}
                            className={selectedCategory === "pizza" ? "active" : ""}
                        >
                            pizza
                        </li>

                        <li
                            onClick={() => filterItems("salad")}
                            className={selectedCategory === "salad" ? "active" : ""}
                        >
                            salad
                        </li>

                        <li
                            onClick={() => filterItems("burger")}
                            className={selectedCategory === "burger" ? "active" : ""}
                        >
                            burger
                        </li>

                        <li
                            onClick={() => filterItems("desserts")}
                            className={selectedCategory === "desserts" ? "active" : ""}
                        >
                            desserts
                        </li>

                        <li
                            onClick={() => filterItems("drinks")}
                            className={selectedCategory === "drinks" ? "active" : ""}
                        >
                            drinks
                        </li>
                    </ul>

                    <div>
                        <div className="icons d-flex">
                            <span
                                title="Grid View"
                                onClick={() => changeToGridViewHandler()}
                                className={!view ? "active" : ""}>
                                <FaGrip />
                            </span>
                            <span
                                title="List View"
                                onClick={() => changeToLIstViewHandler()}
                                ref={spanRef}
                                className={view ? "active" : ""}>
                                <FaList />
                            </span>
                        </div>
                        <div className="select-box">
                            <select
                                id="sort"
                                onChange={(e) => handleSortChange(e.target.value)}
                                value={sortOption}
                                className="form-select"
                            >
                                <option value="default"> Default</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={view ? "all-filters-items change-to-list-view" : "all-filters-items"}>
                    {/* show the style of cards if [list or grid] based on view state */}
                    {
                        loading
                            ?
                            <Spinner />
                            :
                            allItems?.map((el, idx) => (
                                view
                                    ? <SingleCardListView key={idx} product={el} />
                                    : <SingleCard key={idx} product={el} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuFilter;