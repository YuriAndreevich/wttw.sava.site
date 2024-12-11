import { jwtDecode } from "jwt-decode";

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken?.role)
    return decodedToken?.role || null;
  } catch (error) {
    console.error("Ошибка декодирования токена:", error);
    return null;
  }

};
