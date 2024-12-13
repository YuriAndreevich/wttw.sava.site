import styles from './VisitorQuestions.module.scss'; 
import { getAllSendUs, removeSendUs } from "../../../redux/features/sendUs/sendUsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SendUs = () => {
  const dispatch = useDispatch();
  const { sendUs } = useSelector((state) => state.sendUs);

  useEffect(() => {
    dispatch(getAllSendUs());
  }, [dispatch ]);

  const handleDelete = (id) => {
    dispatch(removeSendUs(id));
    dispatch(getAllSendUs());
  };

  return (
    <div>
      <h2>Вопросы от посетителей</h2>
      {(!sendUs || sendUs.length === 0) && <div>Вопросы не найдены.</div>}

      {sendUs?.map((send, idx) => (
        <div key={idx} className={styles.tableWrapper}>
          <table className={styles.questionsTable}>
            <thead>
              <tr>
                <th>Имя</th>
                <th>Email</th>
                <th>Сообщение</th>
                <th>Заголовок</th>
                <th>Действия</th> 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{send.name}</td>
                <td>{send.email}</td>
                <td>{send.text}</td>
                <td>{send.title}</td>
                <td>
                  <button 
                    className={styles.deleteButton} 
                    onClick={() => handleDelete(send._id)} 
                  >
                    ❌
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SendUs;
