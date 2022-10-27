import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../services/api';
import MessageError from '../../MessageError';
import Loading from '../../Loading';
import PhotoContent from '../../PhotoComponents/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [id, request]);

  if (error) {
    return <MessageError error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
