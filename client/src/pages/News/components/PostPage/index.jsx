import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noImage from 'assets/noImage.png';
import styles from './Postpage.module.scss';
import { Text, Title } from 'components/UI';

const PostPage = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching the post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-xl text-center text-white p-20">Загрузка...</div>;
  }

  if (!post) {
    return <div className="text-xl text-center text-red-500 p-20">Пост не найден.</div>;
  }

  return (
    <div className={styles.pageContainer}>
      {/* Контейнер для изображения */}
      <div className={styles.content}>
        {post.imgUrl ? (
          <img
            src={`${import.meta.env.VITE_API_URL}/api/uploads/${post.imgUrl}`}
            alt="Post Image"
            className={styles.post__image}
          />
        ) : (
          <img
            src={noImage}
            alt="No Image"
            className={styles.post__image}
          />
        )}
      </div>
      
      {/* Контейнер для текста */}
      <div className={styles.textContainer}>
        <Title>{post.title}</Title>
        <Text>{post.text}</Text>
      </div>
    </div>
  );
};

export default PostPage;
