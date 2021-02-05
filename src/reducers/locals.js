import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locals: [],
    status: 'idle',
    error: null,
};

export const locals = createSlice({
    name: "locals",
    initialState,
    reducers: {
        getLocals: (state, action) => {
            state.locals.push(action.payload)
        },
        displayLocals: (state, action) => {
            state.locals = action.payload;
            state.loading = false;
        },
        errorMessageLocals: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        extraReducers: {
            [localsListFetch.pending]: (state, action) => {
                state.status = 'loading'
            },
            [localsListFetch.fulfilled]: (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.categories.push(action.payload)
            },
            [localsListFetch.rejected]: (state, action) => {
                state.status = 'failed';
                state.errorMessage = action.error.message
            }

    }
})