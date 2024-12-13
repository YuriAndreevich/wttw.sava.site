import { Title } from "../../components/UI";
import { Link } from "react-router-dom";

// import styles from "./Crm.module.scss";s

function Crm() {
  return (
    <div>
        <Title>
          <Link to="/crm/CreatePostPage">Добавить пост</Link>
        </Title>
        <Title>
          <Link to="/crm/sendus">Вопросы от посетителей</Link>
        </Title>
    </div>
  );
}
export default Crm


