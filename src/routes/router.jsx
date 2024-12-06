import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/Signin";
import Signup from "../pages/Signup";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails";

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
    path: "/movie/:id",
    element: (
      <PrivateRoute>
        <MovieDetails />
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
]);

export default router;
