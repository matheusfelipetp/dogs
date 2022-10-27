import { Route, Routes } from 'react-router-dom';
import UserHeader from '../UserHeader';
import Feed from '../../FeedComponents/Feed';
import UserPhotoPost from '../UserPhotoPost';
import UserStats from '../UserStats';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import NotFound from '../../NotFound';
import Head from '../../Head';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" description="Página da conta do usuário" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
