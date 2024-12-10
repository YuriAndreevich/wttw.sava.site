import User from '../models/User.js';

export const authorizeRoles = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);

      if (!user || !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Доступ запрещен' });
      }

      next();
    } catch (error) {
      console.error("Ошибка при проверке роли пользователя: ", error);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  };
};
