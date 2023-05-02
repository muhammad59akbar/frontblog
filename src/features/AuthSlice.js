import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  UserBlog: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const userBlogLogin = createAsyncThunk(
  "UserBlog/userBlogLogin",
  async (UserBlog, thunkApi) => {
    try {
      const response = await axios.post(
        "https://blog-app-tan-six.vercel.app/mdproLoginKu",
        {
          email: UserBlog.email,
          password: UserBlog.password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

export const MyaccBlog = createAsyncThunk(
  "UserBlog/MyaccBlog",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://blog-app-tan-six.vercel.app/mdproMyAccKu"
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

export const userBlogLogout = createAsyncThunk(
  "UserBlog/userBlogLogout",
  async () => {
    await axios.delete("https://blog-app-tan-six.vercel.app/mdproLogoutKu");
  }
);

export const authSlice = createSlice({
  name: "AuthUserBlog",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userBlogLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userBlogLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.UserBlog = action.payload;
    });
    builder.addCase(userBlogLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(MyaccBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(MyaccBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.UserBlog = action.payload;
    });
    builder.addCase(MyaccBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
