import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import photoReducer from './slice';

const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
  middleware: [thunk],
});

export default store;
