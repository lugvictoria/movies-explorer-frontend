import { createBrowserRouter, defer } from "react-router-dom";
import { LS_AUTH_KEY } from "./defines";
import MainApi from "./utils/MainApi";
import AuthLayout from "./components/auth/AuthLayout";
import Landing from "./components/landing/Landing/Landing";
import Register from "./components/user/Register/Register";
import Login from "./components/user/Login/Login";
import ProtectedLayout from "./components/auth/ProtectedLayout";
import Movie from "./components/movies/Movie/Movie";
import SavedMovies from "./components/movies/SavedMovies/SavedMovies";
import ProfilePage from "./components/user/ProfilePage/ProfilePage";
import Page404 from "./components/Page404/Page404";

async function userDataLoader() {
  const token = window.localStorage.getItem(LS_AUTH_KEY);
  return token ? MainApi.checkToken() : null;
}

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    loader: () => defer({ userPromise: userDataLoader() }),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/movies",
            element: <Movie />,
          },
          {
            path: "/saved-movies",
            element: <SavedMovies />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
