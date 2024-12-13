// src/components/SendUs.js
import { useState } from "react";
import axios from "../../axios"; // Убедитесь, что axios настроен для работы с вашим сервером
import styles from './SendUs.module.scss'; // Подключаем модульные стили

const SendUs = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);


  // Обработчик отправки формы
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("text", text);
      if (file) formData.append("file", file);

      await axios.post("/api/sendUs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setTitle("");
      setName("");
      setEmail("");
      setText("");
      setFile(null);
      alert("Ваш вопрос успешно отправлен!");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка при отправке. Попробуйте снова.");
    }
  };

  return (
    <div className={styles.sendUsForm}>
      <h2>Отправить вопрос</h2>
      <form onSubmit={submitHandler}>
        <label>
          Заголовок:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
            required
          />
        </label>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш Email"
            required
          />
        </label>
        <label>
          Сообщение:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ваше сообщение"
            required
          />
        </label>
        <div className={styles.fileInput}>
          {/* <label>
            Прикрепить файл:
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label> */}
          {file && (
            <div className={styles.filePreview}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
            </div>
          )}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default SendUs;
