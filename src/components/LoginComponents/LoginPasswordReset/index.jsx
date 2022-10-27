import { useEffect, useState } from 'react';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_RESET } from '../../../services/api';
import MessageError from '../../MessageError';
import { useNavigate } from 'react-router-dom';
import Head from '../../Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm('password');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const [response] = await request(url, options);

      if (response.ok) {
        navigate('/login');
      }
    }
  };

  return (
    <div>
      <Head title="Resete a senha" description="Página para resetar a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Restando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <MessageError error={error} />
    </div>
  );
};

export default LoginPasswordReset;
