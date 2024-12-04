import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => fetch("/api/movies"),
  },
]);

export default router;
