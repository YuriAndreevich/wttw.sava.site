import  { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkIsAuth } from "../redux/features/auth/authSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (status) {
    //   setSnackbarMessage(status);
    //   setSnackbarSeverity("success");
    //   setOpenSnackbar(true);
    // }

    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = async () => {
    try {
      await dispatch(registerUser({ username, password }));
      setUsername("");
      setPassword("");
      setSnackbarMessage("Регистрация прошла успешно!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Ошибка при регистрации.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Регистрация
      </Typography>
      <TextField
        label="Имя пользователя"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        sx={{ width: "100%", maxWidth: 400 }}
      />
      <TextField
        type="password"
        label="Пароль"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        sx={{ width: "100%", maxWidth: 400 }}
      />
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ flex: 1 }}
        >
          Подтвердить
        </Button>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            flex: 1,
            textAlign: "center",
          }}
        >
          <Button variant="outlined" color="secondary">
            Уже зарегистрированы?
          </Button>
        </Link>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity={snackbarSeverity} onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
