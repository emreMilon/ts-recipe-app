import React, { FC, useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./styles.css";
import { useDispatch } from "react-redux";
import {
  getRecipes,
  setError,
  setLoading,
} from "../store/actions/recipeAction";

export const SearchForm: FC = () => {
  type MostResarchs = string[];

  const mostResarchs: MostResarchs = [
    "Chicken",
    "Bread",
    "Meat",
    "Breakfast",
    "Toast",
    "Tea",
    "Pasta",
    "Turkish",
    "Teatime",
    "Vegan",
    "Cake",
    "Egg",
    "Fruits",
  ];

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuery(event.target.value as string);
    dispatch(getRecipes(query));
  };

  useEffect(() => {
    dispatch(getRecipes(query));
  }, [dispatch, query]);

  return (
    <React.Fragment>
      <div className="input-container">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={query}
          label="Age"
          onChange={handleChange}
          className="select"
        >
          <MenuItem value="Drinks">Drinks</MenuItem>
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
          <MenuItem value="Snack">Snack</MenuItem>
          <MenuItem value="Teatime">Teatime</MenuItem>
          <MenuItem value="Bread">Bread</MenuItem>
        </Select>
        <input
          id="outlined-basic"
          placeholder="Search a recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-text"
        />
      </div>
      <div className="input-button">
        {mostResarchs.map((res, i) => (
          <Button
            id="button"
            key={i}
            variant="contained"
            size="small"
            onClick={() => setQuery(res)}
          >
            {res}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};
