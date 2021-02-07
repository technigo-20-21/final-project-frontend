import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { locals } from "./locals";
import { LOCALS_URL } from "../urls";
import { get } from "mongoose";

export const fetchLocalsList = createAsyncThunk('locals/fetchLocalsList', async (localCategory, thunkAPI) => {
    try { 
        const url = `${LOCALS_URL}/${localCategory}`
        const response = await fetch(url)
        return await response.json()
    } catch(err){
        console.log(err);
        

    }
        // .then(response => response.json())
        // .then(localsList => {
        //     console.log(localsList)
        //     return localsList
        }) 
// })

// export const fetchLocalsList = (localCategory) => {

//     return (dispatch) => {

//         fetch(`${LOCALS_URL}/${localCategory}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw "No locals to display";
//                 }
//                 return res.json();
//             })
//             .then(localsList => {
//                 dispatch(locals.actions.getLocals(localsList))
//             })
//     }
// }