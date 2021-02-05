import { createSlice } from '@reduxjs/toolkit';
import { categoriesFetch } from './categoriesFetch';

const initialState = {
    categories: [
        {_id: null,
        name: null,
        display_name: null,
        img_url: null}
    ],
    status: 'idle',
    error: null,
};

export const categories = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategories: (state, action) => {
            state.categories.push(action.payload)
        },
    },
    extraReducers: {
        [categoriesFetch.pending]: (state, action) => {
            state.status = 'loading'
        },
        [categoriesFetch.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            console.log(action.payload)
            state.categories.push(action.payload)

            // const newCategory = action.payload;
            // console.log (newCategory)
            // const newCategoryList = [...state.categories, newCategory];
            // console.log (newCategoryList)
            // state.categories = newCategoryList;
            // console.log (state.categories)
        },
        [categoriesFetch.rejected]: (state, action) => {
            state.status = 'failed';
            state.errorMessage = action.error.message
        }
    
    }
})