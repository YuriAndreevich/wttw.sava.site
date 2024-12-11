import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "./PopularPosts";
import { getAllPosts } from "../../redux/features/post/postSlice";
import styles from './News.module.scss';
import Card from './components/Card'


const News = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts || !posts.length) {
    return (
      <div className={styles.noPosts}>
        Постов не существует.
      </div>
    );
  }

  return (

      <div className={styles.contentWrapper}>
         <div className={styles.popularSection}>
          <div className={styles.popularTitle}>Популярные новости:</div>
          {popularPosts?.map((post, idx) => (
            <PopularPosts key={idx} post={post} />
          ))}
        </div>
        <div className={styles.container}>
          {posts?.map((post, idx) => (
            <Card key={idx} post={post} />
          ))}
        </div>
       
      </div>
  );
};

export default News;
