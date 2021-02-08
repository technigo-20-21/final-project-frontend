import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { locals } from "../reducers/locals";
import { fetchLocalsList } from "../reducers/localsFetch";
import { LocalsListThumb } from "../components/LocalsListThumb";
import { Container } from "../library/LandingPageStyles";

export const LocalsListPage = () => {
  const dispatch = useDispatch();

  const localsListStatus = useSelector((state) => state.locals.status);
  const [loc, setLoc] = useState('');
  const [fetchStatus, setFetchStatus] = useState({});

  const { category } = useParams();

  const handleFetchSuccess = (fetchedLocals) => {
    const localsList = fetchedLocals.payload;
    const newLocal = localsList.map(local => ({
      id: local._id,
      name: local.name,
      category: local.category,
    }));
    dispatch(locals.actions.getLocals(newLocal));
 
  };

  useEffect(() => {
    dispatch(fetchLocalsList(category))
      .then(result => {
        handleFetchSuccess(result);
        setLoc(result.payload);
        setFetchStatus(result.type);
      })
      .catch(error => {console.log(error)
        setFetchStatus(error.type);
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
