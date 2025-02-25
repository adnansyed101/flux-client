import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/Signin";
import Signup from "../pages/Signup";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails";
import Favourites from "../pages/Favourites";
import UpdateMoviePage from "../pages/UpdateMoviePage";
import Error from "../pages/Error";
import PricingPage from "../pages/PricingPage";
import ForgetPassword from "../pages/ForgetPassword";
import Main from "../layout/Main";
import ContactUs from "../pages/ContactUs";
import MyMovies from "../pages/MyMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "allMovies",
        element: <AllMovies />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "favourites/:uid",
        element: (
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        ),
      },
      {
        path: "addMovie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "myMovies/:id",
        element: (
          <PrivateRoute>
            <MyMovies />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/movie/:id",
        element: (
          <PrivateRoute>
            <UpdateMoviePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
