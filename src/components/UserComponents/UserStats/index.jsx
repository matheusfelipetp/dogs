import Head from '../../Head';
import useFetch from '../../../hooks/useFetch';
import { lazy, Suspense, useEffect } from 'react';
import { STATS_GET } from '../../../services/api';
import Loading from '../../Loading';
import MessageError from '../../MessageError';
const UserStatsGraph = lazy(() => import('../UserStatsGraph'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('@dogs:token');
      const { url, options } = STATS_GET(token);

      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <MessageError error={error} />;
  }
  if (data) {
    return (
      <Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Página de estatísticas da conta do usuário"
        />
        <UserStatsGraph data={data} />
      </Suspense>
    );
  } else {
    return null;
  }
};

export default UserStats;
