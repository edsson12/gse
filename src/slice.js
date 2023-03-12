import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};
//slice of redux CRUD
export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
    removePhoto: (state, action) => {
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload
      );
    },
    updatePhoto: (state, action) => {
      const { id, ...updates } = action.payload;
      const photo = state.photos.find((photo) => photo.id === id);
      Object.assign(photo, updates);
    },
  },
});

export const { addPhoto, removePhoto, updatePhoto } = photoSlice.actions;

export default photoSlice.reducer;
