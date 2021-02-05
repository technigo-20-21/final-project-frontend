import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import { categories } from "./categories"
import { CATEGORIES_URL } from "../urls";

    

export const categoriesFetch = createAsyncThunk('categories/categoriesFetch', async (dispatch) => {
    fetch(CATEGORIES_URL)
      .then( res => res.json())
      .then(categoriesList => {
          console.log(categoriesList)
          return categories.categoriesList
      })
}); 


    // return (dispatch) => {
    //     const handleFetchSuccess = fetchSuccess => {
    //         dispatch(categories.actions.displayCategories)
    //     };
    //     const handleFetchFailed = fetchErr => {
    //         dispatch(categories.actions.errorMessageCategories({ statusMessage: fetchErr }))
    //     };
    //     fetch(CATEGORIES_URL)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw "No locals to display";
    //             }
    //             return res.json();
    //         })
    //         .then(categoriesList => {
    //             console.log(categoriesList.res);
    //             handleFetchSuccess(categoriesList);
    //         })
    //         .catch(err => handleFetchFailed(err))
//     }

// }