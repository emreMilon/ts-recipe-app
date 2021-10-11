import { useSelector, useDispatch,  TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootState} from "./index"


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()