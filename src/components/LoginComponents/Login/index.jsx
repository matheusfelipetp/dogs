import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm';
import LoginCreate from '../LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset';
import styles from './styles.module.css';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="/conta" />;
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
