import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CATEGORIES_URL } from "../urls";
import { LocalCategoryThumb } from "../components/CategoryThumb";
import { Container, ImageContainer, Image, ImageContent } from "../library/LandingPageStyles";

export const LandingPage = () => {
  const [categories, setCategories] = useState({});
  const [fetchStatus, setFetchStatus] = useState({});

  const fetchCategoriesContent = () => {
    fetch(CATEGORIES_URL)
      .then(res => {
        if (!res.ok) {
          throw "No locals to display";
        }
      return res.json();
      })
      .then(categoriesList => {
        console.log(categoriesList);
        setCategories(categoriesList);
        setFetchStatus({ status: "fulfilled" });
      })
      .catch(err => setFetchStatus(err))
  }
  
  useEffect(() => {
    fetchCategoriesContent();
  }, []);
  console.log(categories.name)
  return (
    <Container>
      {/* {categories.map(category => {
        <LocalCategoryThumb key={category._id} />
      })} */}

    </Container>
  );
};
 
const categories = useSelector(state => state.categories)
const categoriesStatus = useSelector(state => state.categories.status)
console.log (categories) 

useEffect(() => {
  if (categoriesStatus === 'idle') {
    dispatch(categoriesFetch())
    console.log(categories)
  }
}, [categoriesStatus, dispatch]);

