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
        errorMessageLocals: (state, action) => {
            state.status = 'failed'
            state.error = action.payload;
        },
    },
        extraReducers: {
            [fetchLocalsList.pending]: (state, action) => {
                state.status = 'loading'

            },
            [fetchLocalsList.fulfilled]: (state, action) => {
                state.status = 'succeeded';
                state.locals = state.locals.concat(action.payload);
                console.log(state.locals)
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
);

