import { createSlice } from '@reduxjs/toolkit';

const initialLocalsState = {
    locals: [],
    errorMessage: "",
    loading: false,
};

export const locals = createSlice({
    name: "locals",
    initialLocalsState,
    reducers: {
        getLocals: (state, action) => {
            initialLocalsState;
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