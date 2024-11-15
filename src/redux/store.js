import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    notifications: notificationReducer
  }
});

export default store;