import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue } from "firebase/database";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (uid, { dispatch }) => {
    const db = getDatabase();
    try {
      const userRef = ref(db, `users/${uid}/`);
      return new Promise((resolve, reject) => {
        onValue(
          userRef,
          (snapshot) => {
            const userData = snapshot.val();
            dispatch(setUserData(userData));
            resolve(userData);
          },
          (error) => {
            reject(error);
          }
        );
      });
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  }
);
const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
