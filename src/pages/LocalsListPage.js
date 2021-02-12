import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { locals } from "../reducers/locals";
import { fetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/LocalsListThumb";
import { LocalsContainer } from "../library/LocalListPageStyles";

export const LocalsListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const fetchStatus = useSelector((state) => state.locals.status);
  const error = useSelector((state) => state.locals.error);
  const [loc, setLoc] = useState([{}]);

  useEffect(() => {
      dispatch(fetchLocalsList(category))
        .then(result => {
          const localsList = result.payload
  	      console.log(localsList)
          setLoc(localsList);
          dispatch(locals.actions.getLocals(localsList));
        })
  }, [dispatch, category]);

  console.log(category)
  return (
    <LocalsContainer>
      {loc && loc.map((local) => <LocalsListThumb key={local.id} {...local} />)}
    </LocalsContainer>
  );
};
