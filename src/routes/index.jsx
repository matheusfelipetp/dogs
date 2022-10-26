import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/LoginComponents/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import User from '../components/UserComponents/User';

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
    </Routes>
  );
};
