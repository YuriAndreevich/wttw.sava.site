import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, checkIsAuth } from "../redux/features/auth/authSlice";
import {
  Snackbar,
  Alert,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Text } from "../components/UI";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { status, isLoading } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(loginUser({ username, password }))
        .unwrap()
        .then((data) => {
          console.log("Logged in:", data);
          setSnackbarMessage("Login successful!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
        })
        .catch((error) => {
          console.error("Login error:", error);
          setSnackbarMessage(error.toString());
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        });
    } catch (error) {
      console.log(error);
      setSnackbarMessage(error.toString());
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
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Авторизация
      </Typography>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        variant="outlined"
        margin="normal"
        sx={{ width: "100%", maxWidth: 300 }}
      />
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        variant="outlined"
        margin="normal"
        sx={{ width: "100%", maxWidth: 300 }}
      />
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isLoading}
          sx={{ flex: 1 }}
        >
          <Text>Войти</Text>
        </Button>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            flex: 1,
            textAlign: "center",
          }}
        >
          <Button variant="outlined" color="secondary">
            Нет аккаунта ?
          </Button>
        </Link>
      </Box>

      {/* Snackbar для уведомлений */}
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
