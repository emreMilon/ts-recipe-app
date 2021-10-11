import {applyMiddleware, createStore, combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { recipeReducer } from "./reducers/recipeReducer"


const rootReducer = combineReducers({
    recipe: recipeReducer,
})

 const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store