import FeedPhotosItem from '../FeedPhotosItem';
import MessageError from '../../MessageError';
import Loading from '../../Loading';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../services/api';
import { useEffect } from 'react';
import styles from './styles.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };
    fetchPhotos();
  }, [request]);

  if (error) {
    return <MessageError error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
