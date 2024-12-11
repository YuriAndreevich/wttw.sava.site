import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "./components/PopularPosts";
import { getAllPosts } from "../../redux/features/post/postSlice";
import styles from './News.module.scss';
import Card from './components/Card'
import { useLocation, Link } from 'react-router-dom';
import { Title } from "../../components/UI";

const News = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);
  const location = useLocation();
  const isMain = location.pathname === "/";
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts || !posts.length) {
    return (
      <div className={styles.noPosts}>
        Новостей не найдены.
      </div>
    );
  }
  const array = isMain ? posts.slice(0, 3) : posts;

  return (

      <div className={styles.contentWrapper}>
        {!isMain && (
         <div className={styles.popularSection}>
          <div className={styles.popularTitle}>Популярные новости:</div>
          {popularPosts?.map((post, idx) => (
            <PopularPosts key={idx} post={post} />
          ))}
        </div>)}
        <div className={styles.container}>
          {array?.map((post, idx) => (
            <Card key={idx} post={post} />
          ))}
        </div>
          {isMain && (<Link to='/news'><Title>Читать еще</Title></Link>)}
       
      </div>
  );
};

export default News;
