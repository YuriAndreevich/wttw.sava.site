import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

const initialState = {
  comments: [],
  loading: false,
};

// Создание комментария
export const createComment = createAsyncThunk(
  'comment/createComment',
  async ({ postId, comment }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/comments/${postId}`, {
        postId,
        comment,
      });
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Получение комментариев к посту
export const getPostComments = createAsyncThunk(
  'comment/getPostComments',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Создание комментария
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false;
      })
      // Получение комментариев
      .addCase(getPostComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getPostComments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
