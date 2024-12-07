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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => fetch("/api/movies/featured"),
  },
  {
    path: "/allMovies",
    element: <AllMovies />,
  },
  {
    path: "/favourites/:email",
    element: (
      <PrivateRoute>
        <Favourites />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`/api/movies/favourites/${params.email}`),
  },
  {
    path: "/movie/:id",
    element: (
      <PrivateRoute>
        <MovieDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`/api/movies/${params.id}`),
  },
  {
    path: "/update/movie/:id",
    element: (
      <PrivateRoute>
        <UpdateMoviePage />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`/api/movies/${params.id}`),
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
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
