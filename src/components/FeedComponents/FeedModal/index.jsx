import styles from './styles.module.css';
import { PHOTO_GET } from '../../../services/api';
import MessageError from '../../MessageError';
import PhotoContent from '../../PhotoComponents/PhotoContent';
import Loading from '../../Loading';
import useFetch from '../../../hooks/useFetch';
import { useEffect } from 'react';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutSideClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <MessageError error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
