import { useParams } from 'react-router-dom';
import Feed from '../../FeedComponents/Feed';
import Head from '../../Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user} description="Página de um usuário específico" />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
