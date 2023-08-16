import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Landing from "../landing/Landing/Landing";
import Page404 from "../Page404/Page404";
import ProfilePage from "../user/ProfilePage/ProfilePage";
import Movie from "../movies/Movie/Movie";
import SavedMovies from "../movies/SavedMovies/SavedMovies";
import Register from "../user/Register/Register";
import Login from "../user/Login/Login";
import AuthLayout from "../auth/AuthLayout";
import ProtectedLayout from "../auth/ProtectedLayout";
import MainApi from "../../utils/MainApi";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Register/>,
  },
  {
    element: <AuthLayout/>,
    loader: () => defer({ userPromise: MainApi.validate() }),
    children: [
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "/signin",
        element: <Login/>,
      },
      {
        element: <ProtectedLayout/>,
        children: [
          {
            path: "/movies",
            element: <Movie/>,
          },
          {
            path: "/saved-movies",
            element: <SavedMovies/>,
          },
          {
            path: "/profile",
            element: <ProfilePage/>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
