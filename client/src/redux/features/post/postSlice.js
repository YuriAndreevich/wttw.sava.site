import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

const initialState = {
  posts: [],
  popularPosts: [],
  loading: false,
};

// Создание поста
export const createPost = createAsyncThunk('post/createPost', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/api/posts', params);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Получение всех постов
export const getAllPosts = createAsyncThunk('post/getAllPosts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/api/posts');
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Удаление поста
export const removePost = createAsyncThunk('post/removePost', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/api/posts/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Обновление поста
export const updatePost = createAsyncThunk('post/updatePost', async (updatedPost, { rejectWithValue }) => {
  try {
    const { data } = await axios.put(`/api/posts/${updatedPost.id}`, updatedPost);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Создание поста
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = false;
      })
      // Получение всех постов
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts || [];
        state.popularPosts = action.payload.popularPosts;
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.loading = false;
      })
      // Удаление поста
      .addCase(removePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post._id !== action.payload._id);
      })
      .addCase(removePost.rejected, (state) => {
        state.loading = false;
      })
      // Обновление поста
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex((post) => post._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
