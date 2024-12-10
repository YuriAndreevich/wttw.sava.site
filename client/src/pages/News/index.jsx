import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "./PopularPosts";
import { PostItem } from "./PostItem";
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

    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.postsSection}>
          {posts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
          <Card/>
        </div>
        <div className={styles.popularSection}>
          <div className={styles.popularTitle}>Популярное:</div>
          {popularPosts?.map((post, idx) => (
            <PopularPosts key={idx} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
