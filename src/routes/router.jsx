import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/Signin";
import Signup from "../pages/Signup";
import AllMovies from "../pages/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => fetch("/api/movies/featured"),
  },
  {
    path: "/movies",
    element: <AllMovies />,
    loader: () => fetch("/api/movies"),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
