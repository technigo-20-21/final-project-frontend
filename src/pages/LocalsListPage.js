import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";

import { fetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/LocalsListThumb";
import { LocalsContainer } from "../library/LocalListPageStyles";
import { LottieLoader as Loader } from "../library/LottieLoader";

export const LocalsListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const localsListStatus = useSelector(
    (state) => state.locals.localsList.status
  );
  const localsListError = useSelector((state) => state.locals.localsList.error);
  const localsList = useSelector((state) => state.locals.localsList.locals);

  const [localList, setLocalList] = useState(localsList ? localsList : []);

  useEffect(() => {
    dispatch(fetchLocalsList(category)).then((result) => {
      console.log(result)
      const newLocalsList = result.payload;
      setLocalList(newLocalsList);
    });
  }, [dispatch, category]);

  let content;

  if (localsListStatus === "loading") {
    content = <Loader />;
  } else if (localsListStatus === "succeeded") {
    content = localList.map((local) => (
      <LocalsListThumb key={uniqid()} {...local} />
    ));
  } else if (localsListStatus === "failed") {
    content = <div>{localsListError}</div>;
  }

  return <LocalsContainer>{content}</LocalsContainer>;
};
