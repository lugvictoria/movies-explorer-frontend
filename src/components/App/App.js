import { Route, Routes } from "react-router-dom";
import Landing from "../landing/Landing/Landing";
import Page404 from "../Page404/Page404";
import ProfilePage from "../user/ProfilePage/ProfilePage";
import Movies from "../movies/Movies/Movies";
import SavedMovies from "../movies/SavedMovies/SavedMovies";
import Register from "../user/Register/Register";
import Login from "../user/Login/Login";
import { createContext, useContext } from "react";
import "./App.css";

const defAppContext = { isRightShow: false };
const AppContext = createContext(defAppContext);
export const useAppContext = () => useContext(AppContext);

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
