import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { locals } from "./locals";
import { LOCALS_URL } from "../urls";

export const fetchLocalsList = createAsyncThunk('locals/fetchLocalsList', async (localCategory) => {
    fetch(`${LOCALS_URL}/${localCategory}`)
        .then(res => res.json())
        .then(localsList => {
            console.log(localsList)
            return localsList
        })
        
})

// export const categoriesFetch = locals => {
//     return (dispatch) => {
//         const handleFetchSuccess = () => {
            
//         }
//         fetch(LOCALS_URL)
//             .then(res => {
//                 if (!res.ok) {
//                     throw "No locals to display";
//                 }
//                 return res.json();
//             })
//             .then(localsList => {
//                 console.log(localsList.res);
//             })
//     }
// }