import React from "react";
import {
  CategoryLink,
  ThumbImage,
  ThumbText,
  ThumbIcon,
  ThumbTextBox,
} from "../../library/category_list_ui/ThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url }) => {
  return (
    <CategoryLink to={`/locals/${name}`}>
      <ThumbImage url={img_url} imgSize={cover}>
        <ThumbTextBox>
          <ThumbText>{display_name}</ThumbText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
        </ThumbTextBox>
      </ThumbImage>
    </CategoryLink>
  );
};
