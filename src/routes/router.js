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
    UserAccount
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
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);