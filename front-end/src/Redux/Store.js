import {applyMiddleware,legacy_createStore,combineReducers} from "redux"
import AuthReducer from "./AuthReducer";
import {thunk} from "redux-thunk";
import DeveloperReducer from "./DeveloperReducer";


const rootReducer=combineReducers({
    AuthReducer,
    DeveloperReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))

