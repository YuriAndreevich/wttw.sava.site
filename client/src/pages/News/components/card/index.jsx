import styles from './Card.module.scss';
import noImage from 'assets/noImage.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';

const Card = () => {
  return (
      <div className={styles.card}>
  <div className={styles.card__header}>
    <img
      src={noImage}
      alt="card__image"
      className={styles.card__image}
      width="600"
    />
  </div>
  <div className={styles.card__body}>
    <div className={styles['tag-container']}>
      <span className={`${styles.tag} ${styles['tag-brown']}`}>Food</span>
      <span className={`${styles.tag} ${styles['tag-brown']}`}>Food</span>
      <span className={`${styles.tag} ${styles['tag-blue']}`}>Technology</span>
      <span className={`${styles.tag} ${styles['tag-red']}`}>Automobile</span>
    </div>
    <h4>Delicious Food</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!
    </p>
  </div>
  <div className={styles.card__footer}>
    <div className={styles.user}>
      <img
        src="https://i.pravatar.cc/40?img=2"
        alt="user__image"
        className={styles.user__image}
      />
      <div className={styles.user__info}>
        <h5>Jony Doe</h5>
        <small>Yesterday</small>
        <RemoveRedEyeIcon /> 21
        <CommentIcon /> 21
      </div>
    </div>
  </div>
</div>


  );
};

export default Card
