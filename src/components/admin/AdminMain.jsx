import { useEffect } from "react";
import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsersProfile, getUsersCount } from "../../redux/apiCalls/profileApiCall";
// import { getCategoriesCount } from "../../redux/apiCalls/categoryApiCall";
// import { getCustomersCount } from "../../redux/apiCalls/customerApiCall";
// import { getAllPostsForAdmin, getPostsCount } from "../../redux/apiCalls/postApiCall";

import AdminRecentUsers from "./AdminRecentUsers";

import { BsFilePost, BsFillTagFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineUserGroup } from 'react-icons/hi';
import AdminRecentOrders from "./AdminRecentOrders";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { FaBurger } from "react-icons/fa6";
/*===========================================*/
/*===========================================*/
/*===========================================*/

const AdminMain = () => {

    // const dispatch = useDispatch();

    // const { usersCount } = useSelector((state) => state.profile);

    // const { categoriesCount, categories } = useSelector((state) => state.category);

    // const { customersCount } = useSelector((state) => state.customer);

    // const { postsCount, posts } = useSelector((state) => state.post);

    // const { profiles } = useSelector((state) => state.profile);

    /*===========================================*/

    // useEffect(() => {
    //     dispatch(getUsersCount());
    //     dispatch(getCategoriesCount());
    //     dispatch(getCustomersCount());
    //     dispatch(getPostsCount());

    // }, [usersCount, categoriesCount, categories, customersCount, postsCount]);

    /*===========================================*/

    // useEffect(() => {
    //     dispatch(getAllUsersProfile());
    // }, [profiles]);

    /*===========================================*/

    // useEffect(() => {
    //     dispatch(getAllPostsForAdmin());
    // }, []);

    /*===========================================*/

    return (
        <div className='admin-main'>
            <div className="admin-main-sections">
                <div className="single-section">
                    <h4>Orders</h4>
                    <span className="text-danger fw-bold h3">5</span>
                    <div className="single-section-bottom">
                        <Link to="orders">see all orders</Link>
                        <span><FaBurger /></span>
                    </div>
                </div>
                {/* <div className="single-section">
                    <h4>Users</h4>
                    <span className="text-danger fw-bold h3">5</span>
                    <div className="single-section-bottom">
                        <Link to="users">see all users</Link>
                        <span><HiOutlineUserGroup /></span>
                    </div>
                </div> */}

                <div className="single-section">
                    <h4>Customers</h4>
                    <span className="text-danger fw-bold h3">7</span>
                    <div className="single-section-bottom">
                        <Link to="customers">see all Customers</Link>
                        <span><HiOutlineUserGroup /></span>
                    </div>
                </div>
                <div className="single-section">
                    <h4>Categories</h4>
                    <span className="text-danger fw-bold h3">4</span>
                    <div className="single-section-bottom">
                        <Link to="categories">see all categories</Link>
                        <span><BsFillTagFill /></span>
                    </div>
                </div>

            </div>
            <div className="recents">
                {/* <AdminRecentUsers profiles={profiles} />
                <AdminRecentPosts posts={posts} /> */}

                <AdminRecentUsers />
                <AdminRecentOrders />
            </div>
            {/* <ToastContainer autoClose={6000} /> */}
        </div>
    )
}

export default AdminMain;