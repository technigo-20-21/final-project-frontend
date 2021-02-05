import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CATEGORIES_URL } from "../urls"
import { CategoryThumb } from "../components/CategoryThumb"
import { Container, CategoriesContainer } from "../library/LandingPageStyles"

export const LandingPage = () => {
  const [categories, setCategories] = useState();
  const [fetchStatus, setFetchStatus] = useState({});


  const fetchCategoriesContent = () => {
    fetch(CATEGORIES_URL)
      .then(res => {
        if (!res.ok) {
          throw "No categories to display";
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

  return (
    <Container>
      <CategoriesContainer>
      {categories && categories.map(category => (
        <CategoryThumb key={category._id} {...category}/>
      ))} 
      </CategoriesContainer>
    </Container>
  );
};
 