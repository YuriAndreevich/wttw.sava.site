import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noImage from 'assets/noImage.png';
import styles from './Postpage.module.scss'
import { Text, Title } from 'components/UI';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
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
    <div className="container mx-auto p-4">
      <div>  {post.imgUrl ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/api/uploads/${post.imgUrl}`}
              alt="img"
              className={styles.post__image}

            />
          ) : (
            <img
              src={noImage}
              alt="card__image"
              className={styles.post__image}
              width="600"
            />
          )}

{post.tags?.map((tag, index) => (
              <span key={index} className={`${styles.tag} ${styles[`tag-${tag.color}`]}`}>
                {tag.name}
              </span>
            ))}
          <Title>{post.title}</Title>
          <Text>{post.text}</Text>
          </div> 
          <div className={styles.card__footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user__image"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <h5>{post.username}</h5>
              <small>2h ago</small>
              <RemoveRedEyeIcon />
              <span>{post.views}</span>
              <CommentIcon />
              <span>{post.comments?.length || 0}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PostPage;
