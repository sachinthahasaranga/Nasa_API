import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AstronomyPictureOfTheDay from './Pages/AstronomyPictureOfTheDay';
import MarsRoverPhotos from './Pages/MarsRoverPhotos';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUp';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {user &&user.user.role == 'User' ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/marsroverphotos" element={<MarsRoverPhotos />} />
            <Route path="/apod" element={<AstronomyPictureOfTheDay />} />
            <Route path="/logout" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<SignUpPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
