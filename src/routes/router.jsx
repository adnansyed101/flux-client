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
import Error from "../components/Error";
import PricingPage from "../pages/PricingPage";
import ForgetPassword from "../components/ForgetPassword";
import Main from "../layout/Main";
import ContactUs from "../pages/ContactUs";

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
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/allMovies",
        element: <AllMovies />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/favourites/:email",
    element: (
      <PrivateRoute>
        <Favourites />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/favourites/${params.email}`
      ),
  },
  {
    path: "/movie/:id",
    element: (
      <PrivateRoute>
        <MovieDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/${params.id}`
      ),
  },
  {
    path: "/update/movie/:id",
    element: (
      <PrivateRoute>
        <UpdateMoviePage />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/${params.id}`
      ),
  },
  {
    path: "/addMovie",
    element: (
      <PrivateRoute>
        <AddMovie />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
