import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { locals } from "../reducers/locals";
import { fetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/LocalsListThumb";
import { Container } from "../library/LandingPageStyles";

export const LocalsListPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const [loc, setLoc] = useState([{}]);
  const [fetchStatus, setFetchStatus] = useState({});



  const handleFetchSuccess = (fetchedLocals) => {
    const localsList = fetchedLocals.payload;
    const newLocal = localsList.map((local) => ({
      name: local.name,
      id: local._id,
      category: local.category,
    }));
    console.log(newLocal);
    dispatch(locals.actions.getLocals(newLocal));
    console.log(locals);
  };

  useEffect(() => {
    dispatch(fetchLocalsList(category))
    .then(result => {
  	    handleFetchSuccess(result);
        setLoc(result.payload);
        setFetchStatus(result.type);
      })
      .catch(error => {
        console.log(error)
        setFetchStatus(error.type)
      });
  }, [dispatch, category]);

  return (
    <Container>
      {loc && loc.map(local => (
        <LocalsListThumb key={local._id} {...local} />
      ))}
    </Container>
  );
};
