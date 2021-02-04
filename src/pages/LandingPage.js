import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CATEGORIES_URL } from "../urls"
import { LocalCategoryThumb } from "../components/LocalCategoryThumb"
import { Container, ImageContainer, Image, ImageContent } from "../library/LandingPageStyles"

export const LandingPage = () => {
  const [categories, setCategories] = useState();
  const [fetchStatus, setFetchStatus] = useState({});


  const fetchCategoriesContent = () => {
    fetch(CATEGORIES_URL)
      .then(res => {
        if (!res.ok) {
          throw "No locals to display";
        }
      return res.json();
      })
      .then(json => {
        console.log(json);
        setCategories(json);
        setFetchStatus({ status: "fulfilled" });
      })
      .catch(err => setFetchStatus(err))
  }
  
  useEffect(() => {
    fetchCategoriesContent();
  }, []);

  console.log(categories)

  return (
    <Container>
      {categories && categories.map(cat => {
        return <LocalCategoryThumb key={cat._id} cat={cat}/>
      })} 
    </Container>
  );
};
 