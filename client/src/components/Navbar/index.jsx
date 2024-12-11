import { use, useEffect,useState } from "react";
import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import Img from "assets/noImage.png";
import { getMe } from "../../redux/features/auth/authSlice";
import { Title } from 'components/UI';
import Logo from 'assets/logo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const user = useSelector(state => state.auth.user); // получить данные пользователя
  const [Auth, setAuth] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token && !isAuth) {
      console.log("Токен найден, загружаем пользователя...");
      dispatch(getMe()).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          console.log("Пользователь успешно загружен:", action.payload);
          setAuth(true)
        } else {
          console.error("Ошибка при загрузке пользователя:", action.payload);
        }
      });
    }
  }, [dispatch, isAuth]);
  

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <Title>Портал «Окно в мир»</Title>
        {Auth ? (
          <>
            <Link to="/crm">
              <img src={Img} alt="avatar" />
            </Link>
            <span>{user?.username}</span> {/* отобразить имя пользователя */}
            <button onClick={logoutHandler} className={styles.ctaButton}>
              Выйти
            </button>
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
