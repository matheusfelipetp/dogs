import styles from './styles.module.css';
import { PHOTO_DELETE } from '../../../services/api';
import useFetch from '../../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = localStorage.getItem('@dogs:token');
      const { url, options } = PHOTO_DELETE(id, token);
      const [response] = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
