import { Navigate } from "react-router-dom";
import { useUserRole } from "../utils/auth";

const PrivateRoute = ({ children }) => {
  const userRole = useUserRole();
  console.log(userRole)

  // Проверка состояния загрузки
  if (userRole === null) {
    // Отобразите загрузочный компонент или ничего, пока роль загружается
    return <div>Loading...</div>;
  }

  // Если роль определена и это "admin", разрешить доступ
  if (userRole == "admin") {
    return children;
  }

  // В остальных случаях перенаправить
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
