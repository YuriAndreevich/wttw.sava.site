import React from "react";
import styles from "./Card.module.scss";
import NoImage from 'assets/noImage.png'

interface CardProps {
  image: string;
  tag: string;
  tagClass: string;
  title: string;
  description: string;
  userImage: string;
  userName: string;
  time: string;
}

const Card: React.FC<CardProps> = ({
  image,
  tag,
  tagClass,
  title,
  description,
  userImage,
  userName,
  time,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card__body}>
        <span className={`${styles.tag} ${styles[tagClass]}`}>теги</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.user}>
          <img src={NoImage} alt={userName} className={styles.user__image} />
          <div className={styles.user__info}>
            <h5>{userName}</h5>
            <small>{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
