import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCALS_URL } from "../urls";

export const fetchLocalsList = createAsyncThunk(
    "locals/fetchLocalsList",
    async (localCategory) => {
      try {
        const url = `${LOCALS_URL}/${localCategory}`;
        const response = await fetch(url);
        return await response.json();
      } catch (err) {
        console.log(err);
      }	    
    }
);      