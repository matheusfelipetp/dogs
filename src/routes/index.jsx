import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/LoginComponents/Login';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />}></Route>
    </Routes>
  );
};
