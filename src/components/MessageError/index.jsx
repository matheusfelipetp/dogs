import styles from './styles.module.css';

const MessageError = ({ error }) => {
  if (!error) return null;

  return <p className={styles.error}>{error}</p>;
};

export default MessageError;
