import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

const initialState = {
  sendUs: [],
  popularSendUs: [],
  loading: false,
};


export const createSendUs = createAsyncThunk('post/createSendUs', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/api/SendUs', params);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const getAllSendUs = createAsyncThunk('post/getAllSendUs', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/api/SendUs');
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const removeSendUs = createAsyncThunk('post/SendUs', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/api/SendUs/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const updateSendUs = createAsyncThunk('post/updateSendUs', async (updatedPost, { rejectWithValue }) => {
  try {
    const { data } = await axios.put(`/api/SendUs/${updatedPost.id}`, updatedPost);
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const sendUsSlice = createSlice({
  name: 'sendUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSendUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSendUs.fulfilled, (state, action) => {
        state.loading = false;
        state.sendUs.push(action.payload);
      })
      .addCase(createSendUs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllSendUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSendUs.fulfilled, (state, action) => {
        state.loading = false;
        state.sendUs = action.payload.sendUs || [];  
        state.popularSendUs = action.payload.popularSendUs || [];
      })
      
      .addCase(getAllSendUs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeSendUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeSendUs.fulfilled, (state, action) => {
        state.loading = false;
        state.sendUs = state.sendUs.filter((post) => post._id !== action.payload._id);
      })
      .addCase(removeSendUs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateSendUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSendUs.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.sendUs.findIndex((post) => post._id === action.payload._id);
        if (index !== -1) {
          state.sendUs[index] = action.payload;
        }
      })
      .addCase(updateSendUs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default sendUsSlice.reducer;
