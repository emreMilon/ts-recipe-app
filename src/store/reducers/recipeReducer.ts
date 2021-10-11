import {RecipeAction, RecipeState, GET_RECIPE, SET_LOADING, SET_ERROR} from "../types"

const initialState : RecipeState = {
    data: null,
    loading:false,
    error:""
}

export const recipeReducer = (state =initialState, action: RecipeAction) => {
    switch (action.type) {
        case GET_RECIPE:
            return {
                data: action.paylaod,
                loading:false,
                error:""
            }
        case SET_LOADING :
            return {
                ...state,
                laoding:true
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading:false
            }
            
    
        default:
            return state
    }
}