import { Link, useLocation } from "react-router-dom";
import { BsFilePost, BsFillPersonFill, BsFillTagFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineUserGroup, HiChartPie } from 'react-icons/hi';
import { FaBurger } from "react-icons/fa6";
/*===========================================*/
/*===========================================*/
/*===========================================*/

const AdminNav = () => {

  const { pathname } = useLocation();

  return (
    <div className="admin-nav">
      <div className="admin-nav-content">
        <ul>
          <li className="dash-profile">
            <span><BsFillPersonFill /> Profile</span>
            <span>Admin</span>
          </li>
          <li className="dash">
            <Link
              to="/admin"
              className={pathname === "/admin" ? "active" : ""}
            >
              <HiChartPie /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="orders"
              className={pathname === "/admin/orders" ? "active" : ""}
            >
              <FaBurger /> Orders
            </Link>
          </li>
          <li>
            <Link
              to="customers"
              className={pathname === "/admin/customers" ? "active" : ""}
            >
              <HiOutlineUserGroup /> Customers
            </Link>
          </li>
          <li>
            <Link
              to="categories"
              className={pathname === "/admin/categories" ? "active" : ""}
            >
              <BsFillTagFill /> Categories
            </Link>
          </li>

          {/* <li>
            <Link
              to="customers"
              className={pathname === "/admin/customers" ? "active" : ""}
            >
              <FaRegCircleUser /> Customers
            </Link>
          </li> */}

        </ul>
      </div>
    </div>
  )
}

export default AdminNav;