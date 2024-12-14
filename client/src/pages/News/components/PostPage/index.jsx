import { useFetch } from "hooks/useFetch";
import StatusHandler from "components/StatusHandler";
import { useParams } from "react-router-dom";
import styles from "./Postpage.module.scss";
import { Title, Text } from "components/UI";
const Post = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/api/posts/${id}`, "GET");

  return (
    <StatusHandler
      loading={loading}
      error={error}
      noDataMessage="Новость не найдена."
    >
      {data && (
        <div className={styles.pageContainer}>
          <div className={styles.content}>
            {data.imgUrl ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/api/uploads/${
                  data.imgUrl
                }`}
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

          <div className={styles.textContainer}>
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
          </div>
        </div>
      )}
    </StatusHandler>
  );
};

export default Post;
