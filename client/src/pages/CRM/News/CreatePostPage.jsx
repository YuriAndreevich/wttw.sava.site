import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../../../redux/features/post/postSlice";
import styles from './CreatePost.module.scss'; 

export const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [post, setPost] = useState(null); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      
      dispatch(createPost(data)).then(() => {
        const newPost = {
          title,
          text,
          image,
        };
        setPost(newPost); 
        navigate("/"); 
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setText("");
    setTitle("");
    setImage("");
  };

  return (

    <div className={styles.formContainer}>
        <Link to='/crm'>Назад</Link>
      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={styles.fileUpload}>
          Прикрепить изображение:
          <input
            type="file"
            className={styles.fileInput}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <div className={styles.imagePreview}>
          {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
        </div>

        <label className={styles.inputLabel}>
          Заголовок поста:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
            className={styles.textInput}
          />
        </label>

        <label className={styles.inputLabel}>
          Текст поста:
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Текст поста"
            className={styles.textareaInput}
          />
        </label>

        <div className={styles.buttons}>
          <button
            onClick={submitHandler}
            className={styles.submitButton}
          >
            Добавить
          </button>

          <button
            onClick={clearFormHandler}
            className={styles.clearButton}
          >
            Отменить
          </button>
        </div>
      </form>

      {post && (
        <div className={styles.tableWrapper}>
          <table className={styles.postTable}>
            <thead>
              <tr>
                <th>Заголовок</th>
                <th>Текст</th>
                <th>Изображение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{post.title}</td>
                <td>{post.text}</td>
                <td>{post.image && <img src={URL.createObjectURL(post.image)} alt={post.image.name} className={styles.tableImage} />}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
