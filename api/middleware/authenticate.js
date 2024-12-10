import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Токен отсутствует' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Неверный токен' });
  }
};
