import { Link } from "react-router-dom";
import { tabsLinks } from "./tabsLinks";
import styles from "./Sidebar.module.scss";
import FontButtons from "components/FontButton";
import Logo from "assets/logo.png";
import { Title } from "../UI";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { getMe } from "../../redux/features/auth/authSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toggleSidebar } from "../../redux/sidebarSlice";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
const Sidebar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const [Auth, setAuth] = useState(false);

  // Получаем состояние isSidebarHidden из Redux
  const isSidebarHidden = useSelector((state) => state.sidebar.isSidebarHidden);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token && !isAuth) {
      console.log("Токен найден, загружаем пользователя...");
      dispatch(getMe()).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          console.log("Пользователь успешно загружен:", action.payload);
          setAuth(true);
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

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const renderLinks = (links) => {
    return links.map((link, idx) => (
      <li key={idx}>
        {Array.isArray(link.route) ? (
          <>
            <div
              className={styles.submenuLabel}
              onClick={() => handleSubmenuClick(link.label)}
            >
              {link.label}
            </div>
            <ul
              className={`${styles.submenu} ${
                activeSubmenu === link.label ? styles.show : ""
              }`}
            >
              {link.route.map((subLink, subIdx) => (
                <li key={subIdx}>
                  <Link to={subLink.route}>{subLink.label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link to={link.route}>{link.label}</Link>
        )}
      </li>
    ));
  };

  return (
    <>
      <div
        className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}
      >
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <Title>Портал «Окно в мир»</Title>
        </div>
        {!isSidebarHidden && (
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(toggleSidebar())}
          >
            &times;
          </button>
        )}

        {Auth ? (
          <div className={styles.auth}>
            <Link to="/crm">
              <AccountCircleIcon
                alt="avatar"
                fontSize="large"
                className={styles.avatar}
              />
            </Link>
            <Button
              variant="contained"
              onClick={logoutHandler}
              className={styles.ctaButton}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <Link to="/login" className={styles.ctaButton}>
            <Button variant="contained">Войти</Button>
          </Link>
        )}
        <nav>
          <ul>{renderLinks(tabsLinks)}</ul>
        </nav>

        <FontButtons />
        При поддержке учреждения образования «Новополоцкий государственный
        политехнический колледж»
      </div>
    </>
  );
};

export default Sidebar;
