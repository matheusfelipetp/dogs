import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/LoginComponents/Login';
import Photo from '../components/PhotoComponents/Photo';
import ProtectedRoute from '../components/ProtectedRoute';
import User from '../components/UserComponents/User';
import UserProfile from '../components/UserComponents/UserProfile';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />}></Route>
      <Route
        path="conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="foto/:id" element={<Photo />}></Route>
      <Route path="perfil/:user" element={<UserProfile />}></Route>
      <Route path="perfil/:user/foto/:id" element={<Photo />}></Route>
    </Routes>
  );
};
