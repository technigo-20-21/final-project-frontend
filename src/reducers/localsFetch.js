import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCALS_URL, LOCAL_URL } from "../urls";

export const fetchLocalsList = createAsyncThunk(
  "locals/fetchLocalsList",
  async (localCategory) => {
    try {
      console.log(localCategory)
      const url = `${LOCALS_URL}/${localCategory}`;
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchLocal = createAsyncThunk(
    "locals/fetchLocal",
    async (localId) => {
      try {
        const url = `${LOCAL_URL}/${localId}`;
        const response = await fetch(url);
        return await response.json();
      } catch (err) {
        console.log(err);
      }
    }
  );
