import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import postSlice from './features/post/postSlice'
import commentSlice from './features/comment/commentSlice'
import fontReducer from './fontSlice';
import ToastReducer from './features/toastSlice'
import sendUsSlice from './features/sendUs/sendUsSlice'
import sidebarReducer  from './sidebarSlice'
export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        auth: authSlice,
        post: postSlice,
        comment: commentSlice,
        sendUs: sendUsSlice,
        font: fontReducer,
        toast:ToastReducer
    },
})
