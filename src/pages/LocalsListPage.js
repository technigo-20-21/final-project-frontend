import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { locals } from "../reducers/locals";
import { fetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/LocalsListThumb";
import { LocalsContainer } from "../library/LocalListPageStyles";
import { LottieLoader as Loader } from "../library/LottieLoader";

export const LocalsListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const fetchStatus = useSelector((state) => state.locals.status);
  const error = useSelector((state) => state.locals.error);
  const loc = useSelector((state) => state.locals);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchLocalsList(category));
    }
  }, [category, fetchStatus]);

  let content;

  if (fetchStatus === "loading") {
    content = <Loader />;
  } else if (fetchStatus === "succeeded") {
    const localsList = loc.locals;
    content = localsList.map((local) => (
      <LocalsListThumb key={local.id} {...local} />
    ));
  } else if (fetchStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <LocalsContainer>{content}</LocalsContainer>;
};
