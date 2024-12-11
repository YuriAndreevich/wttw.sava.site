import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];  // Извлекаем токен из заголовков

  if (!token) {
    return res.status(403).json({ message: 'Нет доступа. Требуется токен.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);  // Проверка токена
    req.userId = decoded.id;  // Добавление userId в запрос
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Неавторизован. Неверный токен.' });
  }
};
