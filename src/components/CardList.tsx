import React from "react";
import RecipeReviewCard from "./Card";
import { useAppSelector } from "../store/typedHooks";

let title = ["Emre", "Ibrahim", "Adem", "Merve", "Cihan"];

const CardList = () => {
  const recipes = useAppSelector((state) => state.recipe.data);

  console.log(typeof recipes);

  return (
    <div>
      <RecipeReviewCard title={title} />
    </div>
  );
};

export default CardList;
