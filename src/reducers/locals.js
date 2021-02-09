import { createSlice } from '@reduxjs/toolkit';
import { fetchLocalsList, fetchLocal } from './localsFetch';
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
            state.locals = action.payload;
        },
        
        errorMessageLocals: (state, action) => {
            state.status = 'failed'
            state.error = action.payload;
            state.loading = false;
        },
        extraReducers: {
            [fetchLocalsList.pending]: (state, action) => {
                state.status = 'loading'
            },
            [fetchLocalsList.fulfilled]: (state, action) => {
                state.status = 'succeeded';
            },
            [fetchLocalsList.rejected]: (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            },
            [fetchLocal.pending]: (state, action) => {
                state.status = 'loading'
            },
            [fetchLocal.fulfilled]: (state, action) => {
                state.status = 'succeeded';
            },
            [fetchLocal.rejected]: (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            }

        }
    }
});

