// import React, { useState, useEffect } from "react";
// // import homebg from "assets/img/mainSVG.svg";
// import Sidebar from "components/Sidebar";
// // import ProgressBar from "components/progress";
// import "./Header.scss";
// import useWindowSize from "hooks/useWindowSize";

// function Home() {
//   const [isSticky, setIsSticky] = useState(false);
//   const { width: screen } = useWindowSize();

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setIsSticky(screen <= 474 && offset > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [screen]);

//   return (
//     <>
//       <div className="home">
//         {/* <SVG src={homebg} className="" /> */}
//         <h1 className="home-name"> Портал «Окно в мир»</h1>
//         <marquee style={{ color: "#fff", fontSize: "40px" }}>
//           При поддержке учреждения образования «Новополоцкий государственный
//           политехнический колледж»
//         </marquee>
//       </div>
//       <div
//         className="home-navbar"
//         style={{
//           backgroundColor: isSticky ? "#38A169" : "transparent",
//           position: isSticky ? "initial" : "sticky",
//           top: 0,
//         }}
//       >
//         <Sidebar />
//         {/* <ProgressBar /> */}
//       </div>
//     </>
//   );
// }

// export default Home;
import  { useState } from "react";
import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import Img from "assets/noImage.png";
import { Snackbar, Alert } from "@mui/material";

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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyLogo</div>

        {isAuth ? (
          <>
            <Link to="/admin">
              <img src={Img} alt="admin" className="h-8 w-8 mr-4 rounded-xl" />
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

      {/* Snackbar для уведомлений */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Автоматически скрываем через 3 секунды
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

