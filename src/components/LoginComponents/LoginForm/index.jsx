import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import MessageError from '../../MessageError';
import styles from './styles.module.css';
import stylesBtn from '../../Forms/Button/styles.module.css';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';
import Head from '../../Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Login" description="Página de Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled type="submit">
            Carregando...
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        <MessageError error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
