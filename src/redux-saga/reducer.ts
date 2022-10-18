import { combineReducers } from "redux";
import langReducer from "../Components/Lang/reducer";
import themeReducer from "../Components/Theme/reducer";
const rootReducer = combineReducers({
    Lang: langReducer,
    Theme: themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;