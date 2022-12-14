import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { USER_POST } from '../../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import MessageError from '../../MessageError';
import Head from '../../Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const [response] = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" description="Página de criar uma conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <MessageError error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
