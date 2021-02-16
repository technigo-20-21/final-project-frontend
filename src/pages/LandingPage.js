import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CATEGORIES_URL } from "../urls";
import { LottieLoader as Loader } from "../library/LottieLoader";
import { CategoryThumb } from "../components/CategoryThumb";
import { Container, CategoriesContainer } from "../library/LandingPageStyles";

export const LandingPage = () => {
  const { name } = useParams();
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchCategoriesContent = () => {
    fetch(CATEGORIES_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No categories to display");
        }
        return res.json();
      })
      .then((categoriesList) => {
        setCategories(categoriesList);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    fetchCategoriesContent();
  }, [name]);

  return (
    <Container>
      <CategoriesContainer>
        {loading && <Loader />}
        {categories &&
          categories.map((category) => (
            <CategoryThumb key={category._id} {...category} />
          ))}
      </CategoriesContainer>
    </Container>
  );
};
