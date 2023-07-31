import { Route, Routes } from 'react-router-dom';
import Landing from '../landing/Landing/Landing';
import Page404 from '../Page404/Page404';
import './App.css';

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
