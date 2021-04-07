import React from "react";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";

import { FetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/category_list/LocalsListThumb";
import { LocalsContainer } from "../library/category_list_ui/LocalListPageStyles";
import { LottieLoader as Loader } from "../library/global_ui/LottieLoader";

export const LocalsListPage = () => {
  const { category } = useParams();

  const { data, status, error } = FetchLocalsList(category)
   
  if (status === "error") {
    return <div>{error.message}</div>;
  }

  return (
    <LocalsContainer>
      {status === "loading" ? (
        <Loader /> ) : null}

      {status === "success" ? (
        data.map((local) => (
          <LocalsListThumb key={uniqid()} {...local} />
        ))
      ) : null}
    </LocalsContainer>
    )
};
