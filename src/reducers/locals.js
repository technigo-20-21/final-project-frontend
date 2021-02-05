import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locals: [],
    errorMessage: "",
    loading: false,
};

export const locals = createSlice({
    name: "locals",
    initialState,
    reducers: {
        getLocals: (state, action) => {
            state.loading = true;
        },
        displayLocals: (state, action) => {
            state.locals = action.payload;
            state.loading = false;
        },
        errorMessageLocals: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }

    }
})