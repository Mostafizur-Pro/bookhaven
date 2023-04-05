import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Page/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "*",
        element: <h1>Error Page</h1>,
      },
      {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
            
        ]
      }

])

export default router;