export const GET_RECIPE = "GET_RECIPE";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface Hits {
  recipe: {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    dishType: string[];
  };
}

export type RecipeData = {
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Hits[];
};

export interface RecipeError {
  cod: string;
  message: string;
}

export interface RecipeState {
  data: RecipeData | null;
  loading: boolean;
  error: string;
}

interface GetRecipeAction {
  type: typeof GET_RECIPE;
  paylaod: RecipeData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type RecipeAction = GetRecipeAction | SetErrorAction | SetLoadingAction;
