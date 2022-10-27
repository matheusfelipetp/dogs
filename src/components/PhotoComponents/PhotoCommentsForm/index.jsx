import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../../../assets/enviar.svg';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../services/api';
import MessageError from '../../MessageError';
import styles from './styles.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('@dogs:token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const [response, json] = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Digite seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <MessageError error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
