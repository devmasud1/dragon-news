import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/news/:id',
          element: <NewsDetails></NewsDetails>
        }
      ]
    },
  ]);

  export default Router;