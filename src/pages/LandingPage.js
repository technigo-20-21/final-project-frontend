import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CATEGORIES_URL } from "../urls"
import { CategoryThumb } from "../components/CategoryThumb"
import { Container, CategoriesContainer } from "../library/LandingPageStyles"

export const LandingPage = () => {
  const [categories, setCategories] = useState();
  const [fetchStatus, setFetchStatus] = useState({});
  
  const { name } = useParams();

  const fetchCategoriesContent = () => {
    fetch(CATEGORIES_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error("No categories to display");
        }
      return res.json();
      })
      .then(categoriesList => {
        setCategories(categoriesList);
        setFetchStatus({ status: "fulfilled" });
      })
      .catch(err => setFetchStatus(err))
  }
  
  useEffect(() => {
    fetchCategoriesContent();
  }, [name]);

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
 