import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, get } from 'firebase/database';

export const fetchUserData = createAsyncThunk(
  'userData/fetchUserData',
  async (uid) => {

    const db = getDatabase();
    const userRef = ref(db, `users/${uid}/`);
    try {
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      return userData;
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }
);

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.meta.arg] = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;
