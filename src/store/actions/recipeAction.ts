import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  RecipeAction,
  RecipeData,
  RecipeError,
  GET_RECIPE,
  SET_LOADING,
  SET_ERROR,
} from "../types";

export const api = {
  id: process.env.REACT_APP_API_ID,
  key: process.env.REACT_APP_API_KEY,
};

let headers = new Headers();

headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");

export const getRecipes = (
  query: string
): ThunkAction<void, RootState, null, RecipeAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${"865dcb6a"}&app_key=${"bcd426f3921e3ffbdf0ccc80a5867369"}`,
        {
          headers: headers,
        }
      );

      if (!res.ok) {
        const resData: RecipeError = await res.json();
        throw new Error(resData.message);
      }

      const resData: RecipeData = await res.json();
      dispatch({
        type: GET_RECIPE,
        paylaod: resData,
      });
    } catch (error: any) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setLoading = () => (): RecipeAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = () => (): RecipeAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
