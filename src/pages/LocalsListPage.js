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
  const fetchStatus = useSelector((state) => state.locals.status);
  const error = useSelector((state) => state.locals.error);
  const [loc, setLoc] = useState([{}]);

  // const handleFetchSuccess = (fetchedLocals) => {
  //  const localsList = fetchedLocals.payload;
  // const newLocal = localsList.map((local) => ({
  //   name: local.name,
  //   id: local._id,
  //   category: local.category,
  // }));
  // };

  useEffect(() => {
<<<<<<< HEAD
    dispatch(fetchLocalsList(category)).then((result) => {
      const localsList = result.payload;
      // handleFetchSuccess(result);
      setLoc(localsList);
      dispatch(locals.actions.getLocals(localsList));
    });
=======
      dispatch(fetchLocalsList(category))
        .then(result => {
          const localsList = result.payload
  	      console.log(localsList)
          setLoc(localsList);
          dispatch(locals.actions.getLocals(localsList));
        })
>>>>>>> 41e4215c09d6b81f8fb3230510394f4c7f62f65d
  }, [dispatch, category]);

  console.log(category)
  return (
    <Container>
      {loc && loc.map((local) => <LocalsListThumb key={local.id} {...local} />)}
    </Container>
  );
};
