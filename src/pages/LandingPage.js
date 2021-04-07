import React from "react";
import { useParams } from "react-router-dom";
import { LottieLoader as Loader } from "../library/global_ui/LottieLoader";
import { CategoryThumb } from "../components/category_list/CategoryThumb";
import { Container, CategoriesContainer } from "../library/LandingPageStyles";
import { FetchCategoriesList } from "reducers/localsFetch";
import { useQueryClient } from "react-query";

export const LandingPage = () => {

  const queryClient = useQueryClient();
 
  const { data, isLoading, status, error } = FetchCategoriesList();

  console.log(data)
  if (error) {
    return <div>{error.message}</div> 
  }

  return (
    <Container>
      <CategoriesContainer>
        {isLoading ? <Loader/> : null}
        { status === "success" ?
          (data.map((category) => (
            <CategoryThumb key={category._id} {...category} /> ))
          ) : null}
      </CategoriesContainer>
    </Container>
  );
};
