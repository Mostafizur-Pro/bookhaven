import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Page/Home/HomePage";
import ContactPage from "../Page/Contact/ContactPage";
import AboutPage from "../Page/About/AboutPage";

import AllCategories from "../Page/AllCategories/AllCategories";
import Product from "../Page/AllCategories/Product";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Error Page</h1>,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
       
    },
  //   {
  //     path: "/categories/:id",
  //     element: <Product/>,
     
  // },
    {
      path: "/categories/tantasy",
      element: <Product/>,
     
  },
     
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
