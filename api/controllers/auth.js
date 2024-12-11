import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { handleAsync } from "../middleware/handleAsync.js";

export const register = handleAsync(async (req, res) => {
  const { username, password } = req.body;

  const isUsed = await User.findOne({ username });

  if (isUsed) {
    return res.status(400).json({
      message: "Данный username уже занят.",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = new User({
    username,
    password: hash,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  await newUser.save();

  res.status(200).json({
    newUser,
    token,
    message: "Регистрация прошла успешно.",
  });
});

export const login = handleAsync(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "Неверный пароль." });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Неверный пароль." });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  res.status(200).json({
    token,
    user,
    message: "Вы вошли в систему.",
  });
});

export const getMe = handleAsync(async (req, res) => {
  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  res.status(200).json({ user });
});
