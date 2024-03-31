import { createBrowserRouter, createHashRouter } from "react-router-dom";
import {
    Home,
    NotFound,
    Layout,
    Orders,
    MenuFood,
    Search,
    Cart,
    Register,
    Login,
    ItemDetails,
    Checkout,
    About,
    Contact,
    UserAccount,
    AdminMain,
    Admin,
    AdminOrdersTable,
    AdminCutomersTable,
    AdminFoodCategories
} from "../allPagesPaths";

/*===========================================*/
/*===========================================*/
/*===========================================*/

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <MenuFood />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/products/:id",
                element: <ItemDetails />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/account",
                element: <UserAccount />
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <AdminMain />
                    },
                    {
                        path: "orders",
                        element: <AdminOrdersTable />
                    },
                    {
                        path: "customers",
                        element: <AdminCutomersTable />
                    },
                    {
                        path: "categories",
                        element: <AdminFoodCategories />
                    },
                ]
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);