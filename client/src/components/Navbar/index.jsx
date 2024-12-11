
import  { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import Img from "assets/noImage.png";
import { Snackbar, Alert } from "@mui/material";
import { getMe } from "../../redux/features/auth/authSlice";
import {Title} from 'components/UI'
import Logo from 'assets/logo.png'

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    setSnackbarMessage("Вы вышли из системы");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getMe());
    }
  }, [dispatch]);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}><img src={Logo}/></div>
        <Title>Портал «Окно в мир»</Title>
        {isAuth ? (
          <>
            <Link to="/crm">
              <img src={Img} alt="avatar" className="" />
            </Link>
            <button
              onClick={logoutHandler}
              className={styles.ctaButton}
            >
              Выйти
            </button>
          </>
        ) : (
          <Link to={"/login"}>Войти</Link>
        )}
      </nav>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={handleCloseSnackbar}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Navbar;


