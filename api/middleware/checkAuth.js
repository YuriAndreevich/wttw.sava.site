import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            req.userId = decoded.id;
            next();
        } catch (error) {
            console.error("Ошибка при валидации токена: ", error);
            return res.status(403).json({
                message: 'Нет доступа.',
            });
        }
    } else {
        console.error("Ошибка: Токен отсутствует");
        return res.status(401).json({
            message: 'Нет доступа.',
        });
    }
};
