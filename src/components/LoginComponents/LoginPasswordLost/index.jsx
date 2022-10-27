import React from 'react';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST } from '../../../services/api';
import MessageError from '../../MessageError';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      <MessageError error={error} />
    </section>
  );
};

export default LoginPasswordLost;
