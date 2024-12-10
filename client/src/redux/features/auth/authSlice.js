import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

// Регистрация пользователя
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', { username, password });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Логин пользователя
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', { username, password });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getMe = createAsyncThunk('auth/getMe', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/auth/getMe'); 
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
      window.localStorage.removeItem('token'); // Очищаем токен из хранилища
    },
  },
  extraReducers: (builder) => {
    builder
      // Регистрация пользователя
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.message;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = action.payload;
        state.isLoading = false;
      })

      // Логин пользователя
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.message;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = action.payload;
        state.isLoading = false;
      })

      // Проверка авторизации
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = null;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = action.payload;
        state.isLoading = false;
      });
  },
});

// Селектор проверки авторизации
export const checkIsAuth = (state) => Boolean(state.auth.token);

// Экспортируем действия и редуктор
export const { logout } = authSlice.actions;
export default authSlice.reducer;
