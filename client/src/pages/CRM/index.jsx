
import styles from './Crm.module.scss';
import { Link } from "react-router-dom";
function Crm() {

  // Загружаем все вопросы с сервера


  
  return (
    <div>
      
    <div>
      
      <Link to='/crm/CreatePostPage'>Добавить пост</Link>
    </div>
    <div>

      <Link to='/crm/sendus'>Вопросы от посетителей</Link>
    </div>

 
  </div>
);
}

export default Crm;
