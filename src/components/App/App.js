import { Route, Routes } from 'react-router-dom';
import Landing from '../landing/Landing/Landing';
import Page404 from '../Page404/Page404';
import ProfilePage from '../user/ProfilePage/ProfilePage';
import Movies from '../movies/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
