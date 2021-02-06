import React, { useState, useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LOCALS_URL } from "../urls";
import {
  Container,
  ImageContainer,
  Image,
  ImageContent,
} from "../library/LandingPageStyles";
import { fetchLocalsList } from "../reducers/localsFetch";
import { locals } from "../reducers/locals";
export const LocalsListPage = () => {
  const dispatch = useDispatch();

  const localsListStatus = useSelector((state) => state.locals.status);
  const [loc, setLoc] = useState([{}]);
  const [fetchStatus, setFetchStatus] = useState({});
  console.log(locals);

  const { category } = useParams();

  const handleFetchSuccess = (fetchedLocals) => {
    console.log(fetchedLocals.payload);
    const localsList = fetchedLocals.payload;
    const newLocal = localsList.map((local) => ({
      name: local.name,
      id: local._id,
      category: local.category,
    }));
    console.log(newLocal);
    dispatch(locals.actions.getLocals(newLocal));
    console.log(locals);
    //  setLocals(item.name)
    //  console.log(locals)
  };

  // useEffect(() => {
    dispatch(fetchLocalsList(category))
      .then((result) => handleFetchSuccess(result))
      .catch((error) => console.log(error));
  // }, [dispatch, category]);

  return (
    <Container>
      {/* {locals.map(local => {
         <LocalCategoryThumb key={local._id} />
       })} */}
    </Container>
  );
};
