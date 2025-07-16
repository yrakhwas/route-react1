import { combineReducers } from "redux";
import {counterReducer} from "../store/reducers/counter.reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
})


export default rootReducer;