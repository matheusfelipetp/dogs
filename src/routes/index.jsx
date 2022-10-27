import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/LoginComponents/Login';
import NotFound from '../components/NotFound';
import Photo from '../components/PhotoComponents/Photo';
import ProtectedRoute from '../components/ProtectedRoute';
import User from '../components/UserComponents/User';
import UserProfile from '../components/UserComponents/UserProfile';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route
        path="conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
      <Route path="perfil/:user/foto/:id" element={<Photo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
