import styles from './Card.module.scss';
import noImage from 'assets/noImage.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Text, Title } from 'components/UI';

const Card = ({ post }) => {
  if (!post) {
    return (
      <div className="text-xl text-center text-white p-20">Загрузка...</div>
    );
  }
  const maxLengthText = (text, maxLength) => {
    if (text.length > maxLength){
      return text.slice(0, maxLength) + '...'
    } return text

  }

  return (
    <Link to={`/news/${post._id}`}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          {post.imgUrl ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/api/uploads/${post.imgUrl}`}
              alt="img"
              className={styles.card__image}

            />
          ) : (
            <img
              src={noImage}
              alt="card__image"
              className={styles.card__image}
              width="600"
            />
          )}
        </div>
        <div className={styles.card__body}>
          <div className={styles['tag-container']}>
            {post.tags?.map((tag, index) => (
              <span key={index} className={`${styles.tag} ${styles[`tag-${tag.color}`]}`}>
                {tag.name}
              </span>
            ))}
          </div>
          <Title>{maxLengthText(post.title, 35)}</Title>
          <Text>{maxLengthText(post.text, 150)}</Text>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <img
              src={noImage}
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
    </Link>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    username: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.array,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default Card;
