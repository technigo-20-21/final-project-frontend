import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from 'react-router-dom'
import { LOCALS_URL } from "../urls";
import { Container, ImageContainer, Image, ImageContent } from "../library/LandingPageStyles";
import { fetchLocalsList } from "reducers/localsFetch";

export const LocalsListPage = () => {
  const dispatch = useDispatch();
  const localsListStatus = useSelector(state => state.locals.status)
  const localsList = useSelector(state => state.locals.locals)
   const [locals, setLocals] = useState([]);
   const [fetchStatus, setFetchStatus] = useState({});
   console.log(locals) 
    
   const { category } = useParams();
  
   useEffect(() => {
     if (localsListStatus === 'idle') {
       dispatch(fetchLocalsList(category))
       console.log(localsList, category)
     }
   }, [localsListStatus, dispatch, category]);

  //  const fetchLocalsList = () => {
  //    fetch(LOCALS_URL)
  //      .then(res => {
  //        if (!res.ok) {
  //          throw "No locals to display";
  //        }
  //      return res.json();
  //      })
  //      .then(localsList => {
  //        console.log(localsList);
  //        setLocals(localsList);
  //        setFetchStatus({ status: "fulfilled" });
  //      })
  //      .catch(err => setFetchStatus(err))
  //  }
  
   useEffect(() => {
     fetchLocalsList();
   }, []);

   return (
     <Container>
       {/* {locals.map(local => {
         <LocalCategoryThumb key={local._id} />
       })} */}

     </Container>
   )
};