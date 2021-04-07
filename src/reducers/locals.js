import { createSlice } from "@reduxjs/toolkit";
import { FetchLocalsList, FetchLocal } from "./localsFetch";

const initialState = {
  localsList: {
    locals: [],
    status: "idle",
    error: null,
  },
  singleLocal: {
    local: [],
    status: "idle",
    error: null,
  },
};

export const locals = createSlice({
  name: "locals",
  initialState,
  reducers: {
    errorMessageLocals: (state, action) => {
      state.localsList.status = "failed";
      state.localsList.error = action.payload;
    },
  },
  extraReducers: {
    // [fetchLocalsList.pending]: (state, action) => {
    //   state.localsList.status = "loading";
    // },
    // [fetchLocalsList.fulfilled]: (state, action) => {
    //   state.localsList.status = "succeeded";
    //   state.localsList.locals = state.localsList.locals.concat(action.payload);
    // },
    // [fetchLocalsList.rejected]: (state, action) => {
    //   state.localsList.status = "failed";
    //   state.localsList.error = action.error.message;
    // },
    // [fetchLocal.pending]: (state, action) => {
    //   state.singleLocal.status = "loading";
    // },
    // [fetchLocal.fulfilled]: (state, action) => {
    //   state.singleLocal.status = "succeeded";
    //   state.singleLocal.local = action.payload;
    // },
    // [fetchLocal.rejected]: (state, action) => {
    //   state.singleLocal.status = "failed";
    //   state.singleLocal.error = action.error.status;
    // },
  },
});
