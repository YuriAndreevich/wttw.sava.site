import { jwtDecode } from "jwt-decode";
import { getMe } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useUserRole = () => {
  const [role, setRole] = useState(null); // Роль пользователя
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user); // Данные пользователя из состояния

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Если токен есть и пользователь ещё не авторизован
    if (token && !isAuth && !user) {
      console.log("Токен найден, загружаем данные пользователя...");
      dispatch(getMe()).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          console.log("Пользователь успешно загружен:", action.payload);
          const userRole = action.payload?.role;
          if (userRole) {
            console.log("Роль пользователя из getMe:", userRole);
            setRole(userRole);
          }
        } else {
          console.error("Ошибка при загрузке пользователя:", action.payload);
        }
      });
    } else if (token && user) {
      // Если пользователь уже загружен
      console.log("Данные пользователя уже доступны:", user);
      setRole(user.role || null);
    } else if (token) {
      // Если пользователь не загружен, но есть токен
      try {
        const decodedToken = jwtDecode(token);
        console.log("Роль пользователя из токена:", decodedToken?.role);
        setRole(decodedToken?.role || null);
      } catch (error) {
        console.error("Ошибка декодирования токена:", error);
        setRole(null);
      }
    }
  }, [dispatch, isAuth, user]); // Убрали зависимость от `role`

  return role;
};
